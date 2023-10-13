import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagoioService {

  private URL_API = 'https://api.tago.io/data';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '3f1f72c4-da72-4a90-b926-5d41d67e1dde'
  });

  constructor(private http: HttpClient) { }

  postDados(): Observable<any> {
    let body = {
      "variable": "temp",
      "value": 25
    }
    return this.http.post<any>(this.URL_API, body, { headers: this.headers });
  }

  getDados(): Observable<any> {
    return this.http.get<any>(this.URL_API, { headers: this.headers });
  }

  /*
    Para utilizar o http no tagoio é necessário ter um bucket que suporta o https
  */

}
