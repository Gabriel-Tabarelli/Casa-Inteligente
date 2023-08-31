import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  url: string = "http://localhost:3000/api"

  constructor(private http: HttpClient) {}

  enviarMensagem(mensagem: string) {
    this.http.post<any>(`${this.url}/post`, {mensagem: mensagem}).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e)
    })
  }

}
