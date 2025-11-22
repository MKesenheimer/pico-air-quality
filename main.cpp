#include <stdio.h>
#include <stdint.h>
#include <string>
#include <sstream>
#include <iostream>
#include <iomanip>
#include "pico/stdlib.h"
#include "hardware/i2c.h"
#include "hardware/gpio.h"
#include "pico/binary_info.h"
#include "pico-ccs811/ccs811.h"
extern "C" {
#include "pico-mqtt/pico_mqtt.h"
}
#include "pico/time.h"

const char* SENSOR_LOCATION = MQTT_TOPIC_BASE;
const uint DHT_PIN = 12;
const uint MAX_TIMINGS = 85;
const uint CCS811_WAKE_PIN = 3;
const uint CCS811_SDA_PIN = 4;
const uint CCS811_SCL_PIN = 5;

// TODO: 
// - ccs811 refactoring
// - add CMakeFiles to pico_mqtt project
// - pico_mqtt refactoring

typedef struct {
    float humidity;
    float temp_celsius;
} dht_reading;

void read_from_dht(dht_reading *result) {
    int data[5] = {0, 0, 0, 0, 0};
    uint last = 1;
    uint j = 0;

    gpio_set_dir(DHT_PIN, GPIO_OUT);
    gpio_put(DHT_PIN, 0);
    sleep_ms(18);
    gpio_put(DHT_PIN, 1);
    sleep_us(40);
    gpio_set_dir(DHT_PIN, GPIO_IN);

    for (uint i = 0; i < MAX_TIMINGS; i++) {
        uint count = 0;
        while (gpio_get(DHT_PIN) == last) {
            count++;
            sleep_us(1);
            if (count == 255) break;
        }
        last = gpio_get(DHT_PIN);
        if (count == 255) break;

        if ((i >= 4) && (i % 2 == 0)) {
            data[j / 8] <<= 1;
            if (count > 46) data[j / 8] |= 1;
            j++;
        }
    }

    if ((j >= 40) && (data[4] == ((data[0] + data[1] + data[2] + data[3]) & 0xFF))) {
        result->humidity = (float) ((data[0] << 8) + data[1]) / 10;
        if (result->humidity > 100) {
            result->humidity = data[0];
        }
        result->temp_celsius = (float) (((data[2] & 0x7F) << 8) + data[3]) / 10;
        if (result->temp_celsius > 125) {
            result->temp_celsius = data[2];
        }
        if (data[2] & 0x80) {
            result->temp_celsius = -result->temp_celsius;
        }
    } else {
        std::cout << "DHT11: Bad data" << std::endl;
    }
}

/*
//#include "tusb.h"
void wait_for_usb() {
    while (!tud_cdc_connected()) {
        std::cout << ".";
        sleep_ms(500);
    }
    std::cout << "usb host detected\n";
}*/

template<typename _T>
std::string number_to_str(_T number) {
    std::stringstream strs;
    strs << number;
    return strs.str();
}

void blink_led(const unsigned int delay, const unsigned int number) {
    if (number == 0) {
        while (1) {
            cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 0);
            sleep_ms(delay);
            cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 1);
            sleep_ms(delay);
        }
    } else {
        for (int i = 0; i < number; ++i) {
            cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 0);
            sleep_ms(delay);
            cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 1);
            sleep_ms(delay);
        }
    }
}

void connect_to_wifi() {
    std::cout << "Connecting to WiFi... ";
    if (cyw43_arch_wifi_connect_timeout_ms(SSID, PSK, CYW43_AUTH_WPA2_AES_PSK, 30000)) {
        std::cout << "failed to  connect." << std::endl;
        // fast blinking indicates connection issues
        blink_led(100, 100);
    } else {
        std::cout << "Connected." << std::endl;
        blink_led(250, 2);
        cyw43_arch_gpio_put(CYW43_WL_GPIO_LED_PIN, 1);
    }
}

void set_host_name(const char* hostname) {
    cyw43_arch_lwip_begin();
    struct netif *n = &cyw43_state.netif[CYW43_ITF_STA];
    netif_set_hostname(n, hostname);
    netif_set_up(n);
    cyw43_arch_lwip_end();
}

int main() {
    // setup
    stdio_init_all();
    // if you want to debug over usb, include the function wait_for_usb and define
    // pico_enable_stdio_usb(${CMAKE_PROJECT_NAME} 1)
    // in CMakeLists.txt
    //wait_for_usb();

    if (cyw43_arch_init()) {
        std::cout << "Failed to initialize" << std::endl;
        return 1;
    }
    cyw43_arch_enable_sta_mode();

    // Set up our UART with a basic baud rate.
    uart_init(uart0, 115200);
    gpio_set_function(17, GPIO_FUNC_UART);
    gpio_set_function(16, GPIO_FUNC_UART);

    std::cout << "AirQuality Sensor" << std::endl;

    // init DHT11
    gpio_init(DHT_PIN);
    gpio_pull_up(DHT_PIN);

    // Initialize I2C on i2c0 port with 400kHz
    i2c_init(i2c0, 400000);
    gpio_set_function(CCS811_SDA_PIN, GPIO_FUNC_I2C);
    gpio_set_function(CCS811_SCL_PIN, GPIO_FUNC_I2C);
    gpio_pull_up(CCS811_SDA_PIN);
    gpio_pull_up(CCS811_SCL_PIN);
    // init CCS811
    CCS811 ccs811(CCS811_WAKE_PIN);
    ccs811.set_i2cdelay(50); // Needed for ESP8266 because it doesn't handle I2C clock stretch correctly
    bool ok = ccs811.init();
    if(!ok) 
        std::cout << "CCS811: init failed." << std::endl;

    std::cout << "CCS811: Hardware version: " << ccs811.hardware_version() << std::endl;
    std::cout << "CCS811: bootloader version: " << ccs811.bootloader_version() << std::endl;
    std::cout << "CCS811: application version: " << ccs811.application_version() << std::endl;

    ok = ccs811.start(CCS811_MODE_60SEC);
    if(!ok) 
        std::cout << "CCS811: setup FAILED" << std::endl;

    // connect to wifi
    set_host_name(CLIENT_ID);
    connect_to_wifi();

    // new MQTT client
    MQTT_CLIENT_T *state = mqtt_client_init(); 
    run_dns_lookup(state); // load the IP address of mqtt server (either by dns or fixed IP)
    while (mqtt_connect_and_wait(state, 60) != ERR_OK) {
        connect_to_wifi();
    }

    while (1) {
        // DHT11 measurements
        dht_reading reading;
        read_from_dht(&reading);
        float fahrenheit = (reading.temp_celsius * 9 / 5) + 32;
        std::cout << "Humidity = " << std::setprecision(1) << reading.humidity << "%, ";
        std::cout << "Temperature = " << std::setprecision(1) << reading.temp_celsius << "C" << std::endl;
        // pass environment data to CCS811
        ccs811.set_envdata_Celsius_percRH(reading.temp_celsius, reading.humidity);

        uint16_t eco2, etvoc, errstat, raw;
        ccs811.read(&eco2, &etvoc, &errstat, &raw); 

        // CCS811 measurements
        if(errstat == CCS811_ERRSTAT_OK) { 
            std::cout << "eco2 = " << eco2 << " ppm, ";
            std::cout << "etvoc = " << etvoc << " ppb" << std::endl;
            //std::cout << "raw6 = " << raw / 1024 << " uA" << std::endl; 
            //std::cout << "raw10 = " << raw % 1024 << " ADC" << std::endl;
            //std::cout << "R = " << (1650 * 1000L / 1023) * (raw % 1024) / (raw / 1024) << " ohm" << std::endl;
        } else if(errstat == CCS811_ERRSTAT_OK_NODATA) {
            std::cout << "CCS811: waiting for (new) data" << std::endl;
        } else if(errstat & CCS811_ERRSTAT_I2CFAIL) { 
            std::cout << "CCS811: I2C error" << std::endl;
        } else {
            std::cout << "CCS811: errstat = " << errstat << " = " << ccs811.errstat_str(errstat) << std::endl;
        }

        if (mqtt_publish_prepare(state, 60) != ERR_OK) {
            // connection failed, slow blinking 10 times
            blink_led(1000, 10);
            connect_to_wifi();
        }
        std::string global_topic = std::string(SENSOR_LOCATION);
        
        std::string topic = global_topic + "temperature";
        std::string value = number_to_str(reading.temp_celsius);
        err_t err[4];
        err[0] = mqtt_publish_value(state, topic.c_str(), value.c_str());

        topic = global_topic + "humidity";
        value = number_to_str(reading.humidity);
        err[1] = mqtt_publish_value(state, topic.c_str(), value.c_str());

        topic = global_topic + "co2";
        value = number_to_str(eco2);
        err[2] = mqtt_publish_value(state, topic.c_str(), value.c_str());

        topic = global_topic + "tvoc";
        value = number_to_str(etvoc);
        err[3] = mqtt_publish_value(state, topic.c_str(), value.c_str());

        if (mqtt_publish_prepare(state, 60) != ERR_OK) {
            // connection failed, slow blinking 10 times
            blink_led(1000, 10);
            connect_to_wifi();
        }

        bool ok = true;
        for (size_t i = 0; i < 4; ++i) {
            if (err[i] != ERR_OK) {
                std::cout << "Publish err (" << i << "): " << static_cast<int16_t>(err[i]) << std::endl;
                ok = false;
            }
        }
        if (ok) {
            std::cout << "Successfully published all MQTT messages." << std::endl;
            blink_led(250, 1);
        }
        std::cout << std::endl;
        
        sleep_ms(10000);
    }

    cyw43_arch_deinit();
    return 0;
}