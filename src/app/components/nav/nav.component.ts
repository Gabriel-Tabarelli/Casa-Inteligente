import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/services/casa.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  constructor(private route : Router) { }

  @Input()
  tituloPagina!: string;

  voltar(): void {
    this.route.navigate(['/']);
  }
  configuracoes():void{
    this.route.navigate(['/configuracoes']);
  }
}
