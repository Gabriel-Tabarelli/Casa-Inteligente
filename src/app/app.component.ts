import { Component } from '@angular/core';
import { MqttService } from './services/mqtt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casa-inteligente';

  constructor(private mqttService: MqttService) {}

  enviar() {
    this.mqttService.enviarMensagem();
  }
}
