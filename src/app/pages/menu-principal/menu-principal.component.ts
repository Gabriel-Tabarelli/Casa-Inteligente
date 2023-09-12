import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBed, faKitchenSet, faGear, faPowerOff, faCouch, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Casa } from 'src/app/models/casa';
import { Comodo } from 'src/app/models/comodo';
import { CasaService } from 'src/app/services/casa.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(
    private route: Router,
    private casaService: CasaService
  ) { }


  casa!: Casa;
  ngOnInit(): void {
    this.casa = this.casaService.getCasa();
  }
  
  //icones
  faBed = faBed;
  faKitchenSet = faKitchenSet;
  faCouch = faCouch;
  faGear = faGear;
  faPowerOff = faPowerOff;
  faLightbulb = faLightbulb;


  routerComodo(comodo: Comodo): void {
    localStorage.setItem('comodo', JSON.stringify(comodo));
    this.route.navigate(['comodo']);
  }

  mudaRota(){
    this.route.navigate(['informacoes-gerais'])
  }

  desligaTodasLampadas() {
    this.casa.comodos.forEach(comodo => {
      comodo.dispositivos.forEach(dispositivo => {
        dispositivo.estado = false;
      });
    });
    this.updateCasa();
  }

  ligaTodasLampadas() {
    this.casa.comodos.forEach(comodo => {
      comodo.dispositivos.forEach(dispositivo => {
        dispositivo.estado = true;
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
