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

  ngOnInit(): void {
    this.casa = this.casaService.getCasa();
 

  }
  faPowerOff = faPowerOff;

  desligaTodasLampadas() {
    this.casa.comodos.forEach(comodo => {
      comodo.dispositivos.forEach(dispositivo => {
        dispositivo.estado = false;
      });
    });
    this.updateCasa();
  }

  validaLampadas(): boolean {
    return this.casa.comodos.some(comodo => this.validaDispositivos(comodo));
  }

  validaDispositivos(comodo: Comodo):boolean{
    return comodo.dispositivos.some((dispositivo) => dispositivo.estado);
  }

  mudaEstadoLampada(comodo:Comodo) {
   comodo.dispositivos.forEach(dispositivo => {
        dispositivo.estado = !dispositivo.estado;
      });
    
    this.updateCasa();

  }

  updateCasa(): void {
    this.casaService.updateCasa(this.casa);
  }
}
