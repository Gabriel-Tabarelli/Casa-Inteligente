import { Component, OnInit } from '@angular/core';
import { faPowerOff, faCaretUp, faCaretDown, faLightbulb } from '@fortawesome/free-solid-svg-icons';
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
  constructor() { 
    this.lights = '../../../assets/lampada-on.svg';
  }

  ngOnInit(): void {
  }



}
