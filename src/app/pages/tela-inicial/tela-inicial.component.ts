import { CasaService } from 'src/app/services/casa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  constructor(private router: Router, private casaService: CasaService) {}

  login: string = '';
  senha: string = '';
  ngOnInit(): void {
    if (
      this.casaService.getCasa() != null &&
      this.casaService.getCasa() != undefined
    ) {
      this.router.navigate(['/menu-principal']);
    }
  }

  showModalMessageGreen: boolean = false;
  showModalMessageRed: boolean = false;

  verificaSenha(): void {
    if (this.login === 'admin' && this.senha === 'admin') {
      this.showModalMessageGreen = true;
      this.showModalMessageRed = false;
      this.casaService.setCasa();
      setTimeout(() => {
        this.router.navigate(['/menu-principal']);
      }, 2000);
    } else {
      this.showModalMessageRed = true;
      this.showModalMessageGreen = false;
    }
  }
}
