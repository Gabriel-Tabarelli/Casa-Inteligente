import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPowerOff, faCaretUp, faCaretDown, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Comodo } from 'src/app/models/comodo';
import { Dispositivo } from 'src/app/models/dispositivos';
@Component({
  selector: 'app-comodo',
  templateUrl: './comodo.component.html',
  styleUrls: ['./comodo.component.css']
})
export class ComodoComponent implements OnInit {

  faPowerOff = faPowerOff;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faLightbulb = faLightbulb;

  lights: string;
  constructor(private route: ActivatedRoute) { 
    this.lights = '../../../assets/lampada-on.svg';
  }

  comodo!: Comodo;

  tituloPagina!:string;

  ngOnInit(): void {
    this.comodo = JSON.parse(localStorage.getItem('comodo')!);
    console.log(this.comodo);

    if(this.comodo.tipo == 'Quarto'){
      this.tituloPagina = 'Quarto de ' + this.comodo.nome;
    } else{
      this.tituloPagina = this.comodo.nome;
    }
  }

  setLampada(lampada:Dispositivo):void{
    lampada.estado = !lampada.estado;
  }

  ngOnDestroy():void{
    localStorage.removeItem('comodo');
  }



}
