import { Component, OnInit } from '@angular/core';
import { faL, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Casa } from 'src/app/models/casa';
import { Comodo } from 'src/app/models/comodo';
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
  lampadaAuxQuartos!: boolean;
  lampadaAuxCozinha!: boolean;
  lampadaAuxSala!: boolean;
  comodosFor!: any;
  dispositivoUm!: String;
  estadoLampada!:String;

  ngOnInit(): void {
    this.casa = this.casaService.getCasa();
    this.comodosFor = this.casa.comodos;
    this.verificaLampadas();
    this.estadoLampada="OFF";

  }
  faPowerOff = faPowerOff;

  verificaLampadas() {

    this.dispositivoUm = JSON.stringify(this.casa.comodos[0].tipo);

    for (let i = 0; i <= 2; i++) {
      this.lampadaAuxQuartos = this.casa.comodos[0].dispositivos[i].estado;
      console.log(this.lampadaAuxQuartos);

      if (this.lampadaAuxQuartos) {
        this.setLampadaAuxQuartos(true);
        break;
      }
      this.lampadaAuxCozinha = this.casa.comodos[1].dispositivos[i].estado;

      if (this.lampadaAuxCozinha) {
        this.setLampadaAuxCozinha(true);
      }
      this.lampadaAuxSala = this.casa.comodos[2].dispositivos[i].estado;

      if (this.lampadaAuxSala) {
        this.setLampadaAuxSala(true);
      }
    }


  }
  setLampadaAuxQuartos(estado: boolean) {
    this.lampadaAuxQuartos = estado;
    console.log(this.lampadaAuxQuartos);
  }

  setLampadaAuxCozinha(estado: boolean) {
    this.lampadaAuxCozinha = estado;
  }

  setLampadaAuxSala(estado: boolean) {
    this.lampadaAuxSala = estado;
  }

  desligaTodasLampadas() {
    for (let i = 0; i < this.casa.comodos.length; i++) {
      for (let j = 0; j < this.casa.comodos[i].dispositivos.length; j++) {
        this.casa.comodos[i].dispositivos[j].estado = false;
      }
    }
    this.updateCasa();
  }

  validaLampadas(): boolean {
    for (let i = 0; i < this.casa.comodos.length; i++) {
      for (let j = 0; j < this.casa.comodos[i].dispositivos.length; j++) {
        if (this.casa.comodos[i].dispositivos[j].estado) {
          return true;
        }
      }
    }
    return false;
  }

  validaDispositivos(comodo: Comodo):boolean{
    return comodo.dispositivos.some((dispositivo) => dispositivo.estado);
  }

  mudaEstadoLampada(comodo:String) {
    console.log(comodo);
    if(comodo=="Quarto"){
      this.casa.comodos[0].dispositivos.forEach(dispositivo => {
        dispositivo.estado = !dispositivo;
      });

  }else if(comodo=="Cozinha"){

    if(this.forQueMudaEstadoLampada(1)){
      this.estadoLampada="ON";
    }else{
      this.estadoLampada="OFF";
    }

  }else if(comodo=="Sala"){
    if(this.forQueMudaEstadoLampada(2)){
      this.estadoLampada="ON";
    }else{
      this.estadoLampada="OFF";
    }
  }
    this.verificaLampadas();
    this.updateCasa();

  }

  updateCasa(): void {
    this.casaService.updateCasa(this.casa);
  }

  forQueMudaEstadoLampada(x: any): any{
    for (let i = 0; i < this.casa.comodos[x].dispositivos.length; i++) {
      if (!this.casa.comodos[x].dispositivos[i].estado) {
        return this.casa.comodos[x].dispositivos[i].estado = true;
        
        
      } else {
       return this.casa.comodos[x].dispositivos[i].estado = false;
      }
    }
  }




}
