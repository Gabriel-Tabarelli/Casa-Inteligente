import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Casa } from '../models/casa';




const APILINK = "";

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  constructor(private http:HttpClient) { }


  setCasa(index:number):void{
    localStorage.setItem("casa", JSON.stringify(this.getCasaAPI(index)));
  }
  updateCasa(casa: Casa):void{
    localStorage.setItem("casa", JSON.stringify(casa));
  }

  getCasa(): Casa{
    return JSON.parse(localStorage.getItem("casa")!);
  }
  getCasaAPI(index:number): Casa{
    const casa:Casa[]= [
      {
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
                      "id": "4",
                      "nome": "Abajur",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "5",
                      "nome": "Cabeceira",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "6",
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
                      "id": "7",
                      "nome": "Lustre",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "8",
                      "nome": "Luz Rack",
                      "estado": false,
                      "tipo": "Lampada"
                  },
                  {
                      "id": "9",
                      "nome": "Abajur",
                      "estado": false,
                      "tipo": "Lampada"
                  }
              ]
          },
      ],
      "portaoEstado": false
  }, 
  {
      "id": "2",
      "nomeDono": "Genilson",
      "comodos": [
          {
              "id": "1",
              "nome": "Genilson",
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
      "temperaturaGeral":25
  }, 
  {
      "id": "3",
      "nomeDono": "Pedro",
      "comodos": [
          {
              "id": "1",
              "nome": "Pedro",
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
      "gas":27
  }
];
  return casa[index];  
}

  logout() :void{
    localStorage.clear();
  }
}
