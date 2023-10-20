import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBed,
  faKitchenSet,
  faGear,
  faPowerOff,
  faCouch,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import { Casa } from 'src/app/models/casa';
import { Comodo } from 'src/app/models/comodo';
import { GasRespository } from 'src/app/repositories/gas.repository';
import { LuzRespository } from 'src/app/repositories/luz.repository';
import { PortaoRespository } from 'src/app/repositories/portao.repository';
import { TemperaturaRespository } from 'src/app/repositories/temperatura.repository';
import { CasaService } from 'src/app/services/casa.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
})
export class MenuPrincipalComponent implements OnInit {
  constructor(
    private route: Router,
    private casaService: CasaService,
    private portaoRepository: PortaoRespository,
    private temperaturaRepository: TemperaturaRespository,
    private gasRepository: GasRespository) {
    this.lights = '../../../assets/lampada-on.svg';
  }

  casa!: Casa;
  mostrarModal: boolean = false;
  lights: string;
  gas: boolean = false;
  temperatura: boolean = false;
  portao: boolean = false;

  ngOnInit(): void {
    this.casa = this.casaService.getCasa();
    this.verificaComponentes()
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

  mudaEstadoModal(): void {
    this.mostrarModal = !this.mostrarModal;
  }

  mudaEstadoPortao(): void {
    this.portaoRepository.mudarPortao().subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  desligaTodasLampadas() {
    this.casa.comodos.forEach((comodo) => {
      comodo.dispositivos.forEach((dispositivo) => {
        dispositivo.estado = false;
      });
    });
    this.updateCasa();
  }

  ligaTodasLampadas() {
    this.casa.comodos.forEach((comodo) => {
      comodo.dispositivos.forEach((dispositivo) => {
        dispositivo.estado = true;
      });
    });
    this.updateCasa();
  }

  validaLampadas(): boolean {
    return this.casa.comodos.some((comodo) => this.validaDispositivos(comodo));
  }

  validaDispositivos(comodo: Comodo): boolean {
    return comodo.dispositivos.some((dispositivo) => dispositivo.estado);
  }

  mudaEstadoLampada(comodo: Comodo) {
    if (this.validaDispositivos(comodo)) {
      comodo.dispositivos.forEach((dispositivo) => {
        dispositivo.estado = false;
      });
    } else {
      comodo.dispositivos.forEach((dispositivo) => {
        dispositivo.estado = true;
      });
    }

    this.updateCasa();
  }

  updateCasa(): void {
    this.casaService.updateCasa(this.casa);
  }

  verificaComponentes(): void {
    console.log(this.casa.gas);
    if (this.casa.gas != undefined) {
      this.gas = true
      this.gasRepository.getGas().subscribe(() =>
        (value: any) => {
          this.casa.gas = value;
          console.log(this.casa.gas);
          this.casaService.updateCasa(this.casa);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.casa.portaoEstado != undefined) {
      this.portao = true
    } else if (this.casa.temperaturaGeral != undefined) {
      this.temperatura = true
      this.temperaturaRepository.getTemp().subscribe(() =>
        (value: any) => {
          this.casa.gas = value;
          console.log(this.casa.gas);
          this.casaService.updateCasa(this.casa);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
