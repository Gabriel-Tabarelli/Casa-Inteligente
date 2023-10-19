import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPowerOff, faCaretUp, faCaretDown, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Comodo } from 'src/app/models/comodo';
import { Dispositivo } from 'src/app/models/dispositivos';
import { LuzRespository } from 'src/app/repositories/luz.repository';
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
  constructor(private route: ActivatedRoute, private luzRepository : LuzRespository) { 
    this.lights = '../../../assets/lampada-on.svg';
  }

  comodo!: Comodo;

  tituloPagina!:string;

  ngOnInit(): void {
    this.comodo = JSON.parse(localStorage.getItem('comodo')!);
    if(this.comodo.tipo == 'Quarto'){
      this.tituloPagina = 'Quarto de ' + this.comodo.nome;
    } else{
      this.tituloPagina = this.comodo.nome;
    }
  }

  setLampada(lampada:Dispositivo):void{
    this.luzRepository.ascenderLampada(parseInt(lampada.id)).subscribe(
      (value) => {
        console.log(value);
        lampada.estado = !lampada.estado;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy():void{
    localStorage.removeItem('comodo');
  }
}
