const mqtt = require('mqtt');

const protocol = 'mqtt'
const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `${protocol}://${host}:${port}`

const client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
})

const topic = "teste12345"

client.on('connect', () => {
    client.publish(topic, 'Otário', { qos: 0, retain: false }, (error) => {
    if (error) {
    console.error(error)
    }
    })
})