import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
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

}
