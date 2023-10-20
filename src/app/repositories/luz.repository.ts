import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = "https://casa-inteligente-api.vercel.app/api/casa/1";

@Injectable()
export class LuzRespository {
  constructor(private httpClient: HttpClient) { }

  public mudarLampada(id : number): Observable<any> {
    //API solicita pelo id da casa pelo param e o id da luz pelo body
    return this.httpClient.post<any>(`${API_URL}/luz`, { luz : id });
  }

}