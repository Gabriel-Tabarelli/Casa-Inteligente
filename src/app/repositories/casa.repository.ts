import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Casa } from "../models/casa";

const API_URL = "http://localhost:4300";

@Injectable()
export class CasaRespository {
  constructor(private httpClient: HttpClient) { }
  public getHouseByID(id : number): Observable<Casa> | boolean {
    return false;
  }

}