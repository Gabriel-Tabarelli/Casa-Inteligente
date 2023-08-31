import { Component, OnInit } from '@angular/core';
import {faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-informacoes-gerais',
  templateUrl: './informacoes-gerais.component.html',
  styleUrls: ['./informacoes-gerais.component.css']
})
export class InformacoesGeraisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faPowerOff = faPowerOff;

  

}
