
    mqtt = require('mqtt');

    protocol = 'mqtt'
    host = 'broker.emqx.io'
    port = '1883'
    clientId = `mqtt_${Math.random().toString(16).slice(3)}`

    connectUrl = `${protocol}://${host}:${port}`

    client = mqtt.connect(connectUrl, {
        clientId,
        clean: true,
        connectTimeout: 4000,
        username: 'emqx',
        password: 'public',
        reconnectPeriod: 1000,
    })

    topic = "teste12345"

        client.on('connect', () => {
            client.publish(topic, 'Otavinho', { qos: 0, retain: false }, (error) => {
                if (error) {
                    console.error(error)
                }
            })
        })
    