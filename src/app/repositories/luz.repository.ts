import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Casa } from "../models/casa";
import { CasaService } from "../services/casa.service";

const API_URL = "https://casa-inteligente-api.vercel.app/api/casa";

@Injectable()
export class LuzRespository {
  constructor(private httpClient: HttpClient, private casaService: CasaService) { }

  public mudarLampada(id : number): Observable<any> {
    //API solicita pelo id da casa pelo param e o id da luz pelo body
    return this.httpClient.post<any>(`${API_URL}/${this.casaService.getCasaId()}/luz`, { luz : id });
  }

  public mudarTodas(acao: string): Observable<any>{
    return this.httpClient.post<any>(`${API_URL}/${this.casaService.getCasaId()}/luz/todas`, { acao: acao });
  }

}