import { Component, OnInit } from '@angular/core';
import {faHouseChimneyUser, faSignOut} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CasaService } from 'src/app/services/casa.service';
@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private route : Router, private casaService: CasaService) { }

  ngOnInit(): void {
    
  
  }
   
  //icones
   faHouseChimneyUser= faHouseChimneyUser;
   faSignOut = faSignOut;

   listaConfiguracoes : String[] = ["Linguagem", "Acessibilidade", "Dispositivos", "Rede" , "Escanear Casa", "Sair"]
   
   sair(){
    this.casaService.logout();
    this.route.navigate(['/tela-inicial']);
   }
   
}
