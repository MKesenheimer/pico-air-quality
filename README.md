# Raspberry Pi Pico Air Quality Sensor
Set up raspberry pi pico projects according the official [documentation](https://projects.raspberrypi.org/en/projects/getting-started-with-the-pico).

Clone this project:
```bash
git clone --recurse-submodules git@github.com:MKesenheimer/pico-air-quality.git
```

Copy and modify the file `pico-mqtt/crypto_consts_example.h`:
```bash
cp pico-mqtt/crypto_consts_example.h pico-mqtt/crypto_consts.h
```
Populate the variables with desired values.
Update the variable `SENSOR_LOCATION` in `main.cpp` to your liking.

Build and flash the project:
```bash
mkdir build && cd build
cmake ..
make -j4
make flash
```

Test your setup by setting up a MQTT subscriber:
```bash
mosquitto_sub -h 192.168.2.28 -p 1883 -u <CLIENT_USER> -P <CLIENT_PASSWORD> -t '/home/office3/tvoc'
```

##

## Flash with Pico Probe
```bash
sudo openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program pico-air-quality.elf verify reset exit"
```

## Debug with Pico Probe
On macOS debugging arm architectures requires the `arm-none-eabi-gdb` debugger.
Install it with
```bash
sudo port install arm-none-eabi-gdb
```

After flashing, start the gdb proxy:
```bash
sudo openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
```
Or use the makefile command:
```bash
make debug
```

Then connect with `arm-none-eabi-gdb` and start debugging:
```bash
$ /opt/local/bin/arm-none-eabi-gdb pico-air-quality.elf
> target extended-remote localhost:3333
> monitor reset init
> continue
```

Debugging with `lldb` does not work right now. In principle one could connect to the gdb proxy via:
```bash
$ lldb pico-air-quality.elf
(lldb) gdb-remote 3333
(lldb) process plugin packet monitor reset
(lldb) continue
```