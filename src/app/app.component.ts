import {
  IMqttMessage,
  IMqttServiceOptions,
  MqttService,
  IPublishOptions,
} from 'ngx-mqtt';
import { IClientSubscribeOptions } from 'mqtt-browser';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _mqttService: MqttService) {
    this.client = this._mqttService;
  }
  ngOnInit(): void {
    console.log("work");
      const { topic, qos, payload } = this.publish
      console.log(this.publish)
      this.client?.unsafePublish(topic, payload, { qos } as IPublishOptions)
  }
  
  private curSubscription: Subscription | undefined;
  connection = {
    hostname: 'mqtt.tago.io',
    port: 8083,
    path: '/',
    clean: true, 
    connectTimeout: 4000,
    reconnectPeriod: 4000,
    // Authentication information
    clientId: 'Token',
    username: 'Token',
    password: 'a97ab245-bd1f-4e93-87eb-42b283bcdbd1',
    protocol: 'mqtt',
   }
  subscription = {
    topic: 'topic/mqttx',
    qos: 0,
  };
  publish = {
    topic: 'topic/browser',
    qos: 0,
    payload: '{ "msg": "Hello, I am browser." }',
  };
  receiveNews = '';
  qosList = [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
  ];
  client: MqttService | undefined;
  isConnection = false;
  subscribeSuccess = false; // Create a connection

  createConnection() {
    // Connection string, which allows the protocol to specify the connection method to be used
    // ws Unencrypted WebSocket connection
    // wss Encrypted WebSocket connection
    // mqtt Unencrypted TCP connection
    // mqtts Encrypted TCP connection
    try {
      this.client?.connect(this.connection as IMqttServiceOptions);
    } catch (error) {
      console.log('mqtt.connect error', error);
    }
    this.client?.onConnect.subscribe(() => {
      this.isConnection = true;
      console.log('Connection succeeded!');
    });
    this.client?.onError.subscribe((error: any) => {
      this.isConnection = false;
      console.log('Connection failed', error);
    });
    this.client?.onMessage.subscribe((packet: any) => {
      this.receiveNews = this.receiveNews.concat(packet.payload.toString());
      console.log(
        `Received message ${packet.payload.toString()} from topic ${
          packet.topic
        }`
      );
    });
  }
}
