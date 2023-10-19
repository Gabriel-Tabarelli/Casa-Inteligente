import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CasaService } from "../services/casa.service";

const API_URL = "http://localhost:3000/api/casa/1";

@Injectable()
export class LuzRespository {
  constructor(private httpClient: HttpClient) { }

  public ascenderLampada(id : number): Observable<any> {
    //API solicita a casa pelo id da casa pelo param e o id da luz pelo body
    return this.httpClient.post<any>(`${API_URL}/luz`, { luz : id });
  }

}