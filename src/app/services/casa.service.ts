import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Casa } from '../models/casa';




const APILINK = "";

@Injectable({
  providedIn: 'root'
})
export class CasaService implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(){}

  setCasa():void{
    localStorage.setItem("casa", JSON.stringify(this.getCasaAPI()));
  }
  updateCasa(casa: Casa):void{
    localStorage.setItem("casa", JSON.stringify(casa));
  }

  getCasa(): Casa{
    return JSON.parse(localStorage.getItem("casa")!);
  }


  getCasaAPI(): Casa{

    return {
      "id": "1",
      "nomeDono": "Arlindo e Maria",
      "comodos": [
          {
              "id": "1",
              "nome": "Arlindo e Maria",
              "tipo": "Quarto",
              "dispositivos": [
                  {
                      "id": "1",
                      "nome": "Abajur",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "2",
                      "nome": "Cabeceira",
                      "estado": true,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "3",
                      "nome": "Lâmpada Principal",
                      "estado": false,
                      "tipo": "Lampada"
                  }
              ]
          },
          {
              "id": "2",
              "nome": "Geral",
              "tipo": "Cozinha",
              "dispositivos": [
                  {
                      "id": "7",
                      "nome": "Abajur",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "8",
                      "nome": "Cabeceira",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "9",
                      "nome": "Lâmpada Principal",
                      "estado": false,
                      "tipo": "Lampada"
                  }
              ]
          },
          {
            "id": "3",
              "nome": "Geral",
              "tipo": "Sala",
              "dispositivos": [
                  {
                      "id": "10",
                      "nome": "Lustre",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "11",
                      "nome": "Luz Rack",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "12",
                      "nome": "Abajur",
                      "estado": false,
                      "tipo": "Lampada"
                  }
              ]
          },
      ],
      "portaoEstado": false,
      "temperaturaGeral" : 27,
      "gas": 27
  };
  }

  logout() :void{
    localStorage.clear();
  }
}
