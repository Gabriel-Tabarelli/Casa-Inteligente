import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = "https://casa-inteligente-api.vercel.app/api/casa/2";

@Injectable()
export class TemperaturaRespository {
  constructor(private httpClient: HttpClient) { }

  public getTemp(): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}/temperatura`, {});
  }

}