import { Injectable } from '@angular/core';
import * as mqtt from 'mqtt';

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  protocol = 'mqtt';
  host = 'broker.emqx.io';
  port = '1883';
  clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
  connectUrl = `${this.protocol}://${this.host}:${this.port}`;

  client = mqtt.connect(this.connectUrl, {
    clientId: this.clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'emqx',
    password: 'public',
    reconnectPeriod: 1000,
  });

  topic = 'teste12345';

  constructor() {
    this.client.on('connect', () => {
      console.log("connected")
    })
  }

  enviarMensagem() {
    this.client.publish(this.topic, 'Otavinho', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error);
      }
    });
  }

}
