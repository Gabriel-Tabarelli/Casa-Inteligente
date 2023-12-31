import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Casa } from "../models/casa";

const API_URL = "https://casa-inteligente-api.vercel.app/api/casa/1";

@Injectable()
export class PortaoRespository {
  constructor(private httpClient: HttpClient) { }
  public mudarPortao(): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/portao`, {});
  }

}