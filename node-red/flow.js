[
    {
        "id": "73e52fe9.48fee8",
        "type": "tab",
        "label": "Air Quality",
        "disabled": false,
        "info": ""
    },
    {
        "id": "c6b4e39a.093478",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office/temperature",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 130,
        "y": 400,
        "wires": [
            [
                "1ad23787.e293f"
            ]
        ]
    },
    {
        "id": "1ad23787.e293f",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 400,
        "wires": [
            [
                "14900b6.b06caf5",
                "f475729f.3bdc18",
                "c8129a37.77d088"
            ]
        ]
    },
    {
        "id": "720a350f.fa4834",
        "type": "debug",
        "z": "73e52fe9.48fee8",
        "d": true,
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1010,
        "y": 240,
        "wires": []
    },
    {
        "id": "852ca003.022db",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "546dd963.d4d04",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "day",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "18",
        "ymax": "30",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#0042aa",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "b96b6bae.73b5d",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "9dcd67b.2a34098",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "day",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "100",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "156df85e.84d74",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "546dd963.d4d04",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "week",
        "chartType": "line",
        "legend": "true",
        "xformat": "dd HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "18",
        "ymax": "30",
        "removeOlder": "1",
        "removeOlderPoints": "",
        "removeOlderUnit": "604800",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#0042aa",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "f475729f.3bdc18",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "120",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 440,
        "wires": [
            [
                "156df85e.84d74"
            ]
        ]
    },
    {
        "id": "5d36ea1a.612a8c",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "9dcd67b.2a34098",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "week",
        "chartType": "line",
        "legend": "true",
        "xformat": "dd HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "100",
        "removeOlder": "1",
        "removeOlderPoints": "",
        "removeOlderUnit": "604800",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "fa0ae6fd.8ffb7",
        "type": "ui_switch",
        "z": "73e52fe9.48fee8",
        "d": true,
        "name": "",
        "label": "switch",
        "tooltip": "",
        "group": "317d2d03.f8332a",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "decouple": "false",
        "topic": "",
        "style": "",
        "onvalue": "on",
        "onvalueType": "str",
        "onicon": "",
        "oncolor": "",
        "offvalue": "off",
        "offvalueType": "str",
        "officon": "",
        "offcolor": "",
        "x": 90,
        "y": 1540,
        "wires": [
            [
                "86c6a477.4acff8"
            ]
        ]
    },
    {
        "id": "86c6a477.4acff8",
        "type": "mqtt out",
        "z": "73e52fe9.48fee8",
        "d": true,
        "name": "",
        "topic": "/home/office/output",
        "qos": "",
        "retain": "",
        "broker": "cd12958d.beb52",
        "x": 300,
        "y": 1540,
        "wires": []
    },
    {
        "id": "14900b6.b06caf5",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "10",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 400,
        "wires": [
            [
                "852ca003.022db"
            ]
        ]
    },
    {
        "id": "c46c63ea.9ffc",
        "type": "function",
        "z": "73e52fe9.48fee8",
        "d": true,
        "name": "Timestamp",
        "func": "msg.payload = {time: new Date(), temperature: msg.payload}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 850,
        "y": 240,
        "wires": [
            [
                "720a350f.fa4834"
            ]
        ]
    },
    {
        "id": "26e85723.d22d9",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office/co2",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 100,
        "y": 940,
        "wires": [
            [
                "a346de91.586db"
            ]
        ]
    },
    {
        "id": "ad53e837.454f6",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "8ef46ea8.64dab",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "week",
        "chartType": "line",
        "legend": "true",
        "xformat": "dd HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "400",
        "ymax": "",
        "removeOlder": "1",
        "removeOlderPoints": "",
        "removeOlderUnit": "604800",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "6d3586ab.01a2c",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "8ef46ea8.64dab",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "day",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "400",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "636dfa1d.00b8e4",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office/tvoc",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 110,
        "y": 1220,
        "wires": [
            [
                "8e782d3a.64fe9"
            ]
        ]
    },
    {
        "id": "bfada2ab.94a478",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "348318c0.be3e3",
        "order": 3,
        "width": 0,
        "height": 0,
        "label": "week",
        "chartType": "line",
        "legend": "true",
        "xformat": "dd HH:mm",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": "1",
        "removeOlderPoints": "",
        "removeOlderUnit": "604800",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 1260,
        "wires": [
            []
        ]
    },
    {
        "id": "bd943ce2.db796",
        "type": "ui_chart",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "348318c0.be3e3",
        "order": 2,
        "width": 0,
        "height": 0,
        "label": "day",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "0",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "86400",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#008cb4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "x": 790,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "892dc851.d5eaf",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "d": true,
        "name": "",
        "topic": "/home/office/error",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 110,
        "y": 1440,
        "wires": [
            [
                "ba2bd350.a07fe8"
            ]
        ]
    },
    {
        "id": "361f5c2.7e97824",
        "type": "ui_text",
        "z": "73e52fe9.48fee8",
        "d": true,
        "group": "546dd963.d4d04",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "x": 510,
        "y": 1440,
        "wires": []
    },
    {
        "id": "ba2bd350.a07fe8",
        "type": "function",
        "z": "73e52fe9.48fee8",
        "d": true,
        "name": "Timestamp",
        "func": "msg.payload = {time: new Date(), error: msg.payload}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 330,
        "y": 1440,
        "wires": [
            [
                "361f5c2.7e97824"
            ]
        ]
    },
    {
        "id": "482dd729.a9792",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office2/temperature",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 130,
        "y": 460,
        "wires": [
            [
                "24cb72eb.344c06"
            ]
        ]
    },
    {
        "id": "24cb72eb.344c06",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office2",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 460,
        "wires": [
            [
                "14900b6.b06caf5",
                "f475729f.3bdc18",
                "c8129a37.77d088"
            ]
        ]
    },
    {
        "id": "12b42c5d.315a1c",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office2/co2",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 110,
        "y": 1000,
        "wires": [
            [
                "2e23e659.74b7da"
            ]
        ]
    },
    {
        "id": "f86574d2.447d1",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office2/tvoc",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 110,
        "y": 1280,
        "wires": [
            [
                "34f2b407.1b8ba4"
            ]
        ]
    },
    {
        "id": "325813e3.e6b964",
        "type": "ui_dropdown",
        "z": "73e52fe9.48fee8",
        "name": "",
        "label": "",
        "tooltip": "",
        "place": "office",
        "group": "fdcdcac6.26e47",
        "order": 0,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "office",
                "value": "office",
                "type": "str"
            },
            {
                "label": "office2",
                "value": "office2",
                "type": "str"
            },
            {
                "label": "office3",
                "value": "office3",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 130,
        "y": 200,
        "wires": [
            [
                "65374632.7677e8"
            ]
        ]
    },
    {
        "id": "65374632.7677e8",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "select",
                "pt": "flow",
                "to": "$string(payload)",
                "tot": "jsonata"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 380,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "6d123f24.b1e9f",
        "type": "ui_gauge",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "348318c0.be3e3",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "tVOC",
        "label": "ppb",
        "format": "{{value}}",
        "min": 0,
        "max": "1187",
        "colors": [
            "#96d35f",
            "#fffc41",
            "#ff4013"
        ],
        "seg1": "200",
        "seg2": "1000",
        "x": 790,
        "y": 1160,
        "wires": []
    },
    {
        "id": "51737351.589f8c",
        "type": "ui_gauge",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "8ef46ea8.64dab",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "CO2",
        "label": "ppm",
        "format": "{{value}}",
        "min": "400",
        "max": "2000",
        "colors": [
            "#96d35f",
            "#fffc41",
            "#ff4013"
        ],
        "seg1": "1000",
        "seg2": "1400",
        "x": 790,
        "y": 880,
        "wires": []
    },
    {
        "id": "f504dda9.8895f8",
        "type": "ui_gauge",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "9dcd67b.2a34098",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Humidity",
        "label": "%",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#fffc41",
            "#96d35f",
            "#00c7fc"
        ],
        "seg1": "39",
        "seg2": "60",
        "x": 800,
        "y": 600,
        "wires": []
    },
    {
        "id": "d12dec83.4c915",
        "type": "ui_gauge",
        "z": "73e52fe9.48fee8",
        "name": "",
        "group": "546dd963.d4d04",
        "order": 1,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Temperature",
        "label": "°C",
        "format": "{{value}}",
        "min": "10",
        "max": "30",
        "colors": [
            "#00c7fc",
            "#96d35f",
            "#fff76b"
        ],
        "seg1": "18",
        "seg2": "22",
        "x": 810,
        "y": 340,
        "wires": []
    },
    {
        "id": "c8129a37.77d088",
        "type": "function",
        "z": "73e52fe9.48fee8",
        "name": "select",
        "func": "var variable = msg.payload;\nvar topic = msg.topic;\nvar select = flow.get('select') || \"office\";\nif (select == topic) {\n    msg.payload = variable;\n    return msg;    \n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 590,
        "y": 340,
        "wires": [
            [
                "d12dec83.4c915",
                "c46c63ea.9ffc"
            ]
        ]
    },
    {
        "id": "a6ddbdd7.6e75f",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office3",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 520,
        "wires": [
            [
                "14900b6.b06caf5",
                "f475729f.3bdc18",
                "c8129a37.77d088"
            ]
        ]
    },
    {
        "id": "b6a3da42.d67b2",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office3/temperature",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 130,
        "y": 520,
        "wires": [
            [
                "a6ddbdd7.6e75f"
            ]
        ]
    },
    {
        "id": "eff5fb9f.75a85",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office/humidity",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 120,
        "y": 660,
        "wires": [
            [
                "450f5465.1bc854"
            ]
        ]
    },
    {
        "id": "7ffbb13b.90471",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office2/humidity",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 120,
        "y": 720,
        "wires": [
            [
                "49ba8653.602e5"
            ]
        ]
    },
    {
        "id": "c30966eb.34294",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office3/humidity",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 120,
        "y": 780,
        "wires": [
            [
                "901e6d30.348ea"
            ]
        ]
    },
    {
        "id": "b116c04d.ba284",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office3/co2",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 110,
        "y": 1060,
        "wires": [
            [
                "a5f4ba5a.40d098"
            ]
        ]
    },
    {
        "id": "74af457.b33493c",
        "type": "mqtt in",
        "z": "73e52fe9.48fee8",
        "name": "",
        "topic": "/home/office3/tvoc",
        "qos": "2",
        "datatype": "utf8",
        "broker": "cd12958d.beb52",
        "x": 110,
        "y": 1340,
        "wires": [
            [
                "5682ebdb.abf13c"
            ]
        ]
    },
    {
        "id": "450f5465.1bc854",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 660,
        "wires": [
            [
                "d631ff23.0b4e5",
                "2de8b26.8b8a6ce",
                "20149b7.b57efe4"
            ]
        ]
    },
    {
        "id": "2de8b26.8b8a6ce",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "120",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 700,
        "wires": [
            [
                "5d36ea1a.612a8c"
            ]
        ]
    },
    {
        "id": "d631ff23.0b4e5",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "10",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 660,
        "wires": [
            [
                "b96b6bae.73b5d"
            ]
        ]
    },
    {
        "id": "49ba8653.602e5",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office2",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 720,
        "wires": [
            [
                "d631ff23.0b4e5",
                "2de8b26.8b8a6ce",
                "20149b7.b57efe4"
            ]
        ]
    },
    {
        "id": "901e6d30.348ea",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office3",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 780,
        "wires": [
            [
                "d631ff23.0b4e5",
                "2de8b26.8b8a6ce",
                "20149b7.b57efe4"
            ]
        ]
    },
    {
        "id": "20149b7.b57efe4",
        "type": "function",
        "z": "73e52fe9.48fee8",
        "name": "select",
        "func": "var variable = msg.payload;\nvar topic = msg.topic;\nvar select = flow.get('select') || \"office\";\nif (select == topic) {\n    msg.payload = variable;\n    return msg;    \n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 590,
        "y": 600,
        "wires": [
            [
                "f504dda9.8895f8"
            ]
        ]
    },
    {
        "id": "a346de91.586db",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 940,
        "wires": [
            [
                "f21f3070.12b888",
                "1d751cb5.a2eb5b",
                "de48baa3.1718d"
            ]
        ]
    },
    {
        "id": "1d751cb5.a2eb5b",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "120",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 980,
        "wires": [
            [
                "ad53e837.454f6"
            ]
        ]
    },
    {
        "id": "f21f3070.12b888",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "10",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 940,
        "wires": [
            [
                "6d3586ab.01a2c"
            ]
        ]
    },
    {
        "id": "2e23e659.74b7da",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office2",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 1000,
        "wires": [
            [
                "f21f3070.12b888",
                "1d751cb5.a2eb5b",
                "de48baa3.1718d"
            ]
        ]
    },
    {
        "id": "a5f4ba5a.40d098",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office3",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 1060,
        "wires": [
            [
                "f21f3070.12b888",
                "1d751cb5.a2eb5b",
                "de48baa3.1718d"
            ]
        ]
    },
    {
        "id": "de48baa3.1718d",
        "type": "function",
        "z": "73e52fe9.48fee8",
        "name": "select",
        "func": "var variable = msg.payload;\nvar topic = msg.topic;\nvar select = flow.get('select') || \"office\";\nif (select == topic) {\n    msg.payload = variable;\n    return msg;    \n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 590,
        "y": 880,
        "wires": [
            [
                "51737351.589f8c"
            ]
        ]
    },
    {
        "id": "8e782d3a.64fe9",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 1220,
        "wires": [
            [
                "2bbd659d.6f3892",
                "5f7674ef.0c7e94",
                "3ab7a17b.ab124e"
            ]
        ]
    },
    {
        "id": "5f7674ef.0c7e94",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "120",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 1260,
        "wires": [
            [
                "bfada2ab.94a478"
            ]
        ]
    },
    {
        "id": "2bbd659d.6f3892",
        "type": "smooth",
        "z": "73e52fe9.48fee8",
        "name": "",
        "property": "payload",
        "action": "mean",
        "count": "10",
        "round": "",
        "mult": "multi",
        "reduce": true,
        "x": 600,
        "y": 1220,
        "wires": [
            [
                "bd943ce2.db796"
            ]
        ]
    },
    {
        "id": "34f2b407.1b8ba4",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office2",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 1280,
        "wires": [
            [
                "2bbd659d.6f3892",
                "5f7674ef.0c7e94",
                "3ab7a17b.ab124e"
            ]
        ]
    },
    {
        "id": "5682ebdb.abf13c",
        "type": "change",
        "z": "73e52fe9.48fee8",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "$number(payload)",
                "tot": "jsonata"
            },
            {
                "t": "set",
                "p": "topic",
                "pt": "msg",
                "to": "office3",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 1340,
        "wires": [
            [
                "2bbd659d.6f3892",
                "5f7674ef.0c7e94",
                "3ab7a17b.ab124e"
            ]
        ]
    },
    {
        "id": "3ab7a17b.ab124e",
        "type": "function",
        "z": "73e52fe9.48fee8",
        "name": "select",
        "func": "var variable = msg.payload;\nvar topic = msg.topic;\nvar select = flow.get('select') || \"office\";\nif (select == topic) {\n    msg.payload = variable;\n    return msg;    \n}",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "x": 590,
        "y": 1160,
        "wires": [
            [
                "6d123f24.b1e9f"
            ]
        ]
    },
    {
        "id": "cd12958d.beb52",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": false,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthRetain": "false",
        "birthPayload": "",
        "closeTopic": "",
        "closeQos": "0",
        "closeRetain": "false",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willRetain": "false",
        "willPayload": ""
    },
    {
        "id": "546dd963.d4d04",
        "type": "ui_group",
        "name": "Temperature",
        "tab": "69edb93c.c3c818",
        "order": 6,
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "9dcd67b.2a34098",
        "type": "ui_group",
        "name": "Humidity",
        "tab": "69edb93c.c3c818",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "317d2d03.f8332a",
        "type": "ui_group",
        "z": "73e52fe9.48fee8",
        "name": "Testing",
        "tab": "69edb93c.c3c818",
        "order": 7,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "8ef46ea8.64dab",
        "type": "ui_group",
        "name": "CO2",
        "tab": "69edb93c.c3c818",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "348318c0.be3e3",
        "type": "ui_group",
        "name": "tVOC",
        "tab": "69edb93c.c3c818",
        "order": 5,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "fdcdcac6.26e47",
        "type": "ui_group",
        "name": "Selection",
        "tab": "69edb93c.c3c818",
        "order": 2,
        "disp": false,
        "width": "6",
        "collapse": false
    },
    {
        "id": "69edb93c.c3c818",
        "type": "ui_tab",
        "name": "Air Quality",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
