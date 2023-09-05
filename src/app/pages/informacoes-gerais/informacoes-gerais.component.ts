import { Component, OnInit } from '@angular/core';
import {faL, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/services/casa.service';

@Component({
  selector: 'app-informacoes-gerais',
  templateUrl: './informacoes-gerais.component.html',
  styleUrls: ['./informacoes-gerais.component.css']
})
export class InformacoesGeraisComponent implements OnInit {

  constructor(private casaService: CasaService) { 

  }
  casa!: Casa;
  lampadaAuxQuartos!:boolean;
  lampadaAuxCozinha!: boolean;
  lampadaAuxSala!: boolean;
  comodosFor!: any;
  dispositivoUm!:  String;

  ngOnInit(): void {
     this.casa=this.casaService.getCasa();
     this.comodosFor= this.casa.comodos;
     this.verificaLampadas();
     
  }
  faPowerOff = faPowerOff;
  
  verificaLampadas(){

   this.dispositivoUm = JSON.stringify(this.casa.comodos[0].tipo);

    for(let i=0; i<=2; i++){
      this.lampadaAuxQuartos= this.casa.comodos[0].dispositivos[i].estado;
      console.log(this.lampadaAuxQuartos);

      if(this.lampadaAuxQuartos){
        this.setLampadaAuxQuartos(true);
        break;
      }
      this.lampadaAuxCozinha= this.casa.comodos[1].dispositivos[i].estado;

      if(this.lampadaAuxCozinha){
        this.setLampadaAuxCozinha(true);
      }
      this.lampadaAuxSala= this.casa.comodos[2].dispositivos[i].estado;

      if(this.lampadaAuxSala){
        this.setLampadaAuxSala(true);
      }
    }
  
    
  }
  setLampadaAuxQuartos(estado:boolean){
    this.lampadaAuxQuartos=estado;
    console.log(this.lampadaAuxQuartos);
  }

  setLampadaAuxCozinha(estado:boolean){
    this.lampadaAuxCozinha=estado;
  }

  setLampadaAuxSala(estado:boolean){
    this.lampadaAuxSala=estado;
  }

  desligaTodasLampadas(){
    for(let i = 0 ; i < this.casa.comodos.length ; i++){
      for(let j = 0 ; j < this.casa.comodos[i].dispositivos.length ; j++){
        this.casa.comodos[i].dispositivos[j].estado = false;
      }
    }
    this.casaService.setCasa(this.casa);
  }

  validaLampadas(): boolean{
    for(let i = 0 ; i < this.casa.comodos.length ; i++){
      for(let j = 0 ; j < this.casa.comodos[i].dispositivos.length ; j++){
        if(this.casa.comodos[i].dispositivos[j].estado){
          return true;
        }
      }
    }
    return false;
  }

  mudaEstadoLampadasQuartos(){
    for(let i=0; i< this.casa.comodos[0].dispositivos.length; i++){
      if(!this.casa.comodos[0].dispositivos[i].estado){
        this.casa.comodos[0].dispositivos[i].estado=true;
        this.casaService.setCasa(this.casa);
      }else{
        this.casa.comodos[0].dispositivos[i].estado=false;
        this.casaService.setCasa(this.casa);
      }
    }
  }

  mudaEstadoLampadasCozinha(){
    console.log("MUDA COZINHA")
    for(let i=0; i< this.casa.comodos[0].dispositivos.length; i++){
      if(!this.casa.comodos[1].dispositivos[i].estado){
        console.log("TRUE")
        this.casa.comodos[1].dispositivos[i].estado=true;
        this.casaService.setCasa(this.casa);
      }else{
        this.casa.comodos[1].dispositivos[i].estado=false;
        this.casaService.setCasa(this.casa);
      }
    }
  }

  mudaEstadoLampadaSala(){
    console.log("MUDA SALA")
    for(let i=0; i< this.casa.comodos[0].dispositivos.length; i++){
      if(!this.casa.comodos[2].dispositivos[i].estado){
        console.log("TRUE")
        this.casa.comodos[2].dispositivos[i].estado=true;
        console.log(this.casa.comodos[2].dispositivos[i].estado);
        this.casaService.setCasa(this.casa);
      }else{
        this.casa.comodos[2].dispositivos[i].estado=false;
        this.casaService.setCasa(this.casa);
      }
    }
  }

  
  

}
