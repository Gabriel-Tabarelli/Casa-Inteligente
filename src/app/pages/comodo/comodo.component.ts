import { Component, OnInit } from '@angular/core';
import { faPowerOff, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-comodo',
  templateUrl: './comodo.component.html',
  styleUrls: ['./comodo.component.css']
})
export class ComodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faPowerOff = faPowerOff;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;

}
