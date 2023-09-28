import { Component, OnInit } from '@angular/core';
import {faHouseChimneyUser, faSignOut} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
    
  
  }
   
  //icones
   faHouseChimneyUser= faHouseChimneyUser;
   faSignOut = faSignOut;

   listaConfiguracoes : String[] = ["Linguagem", "Acessibilidade", "Dispositivos", "Rede" , "Escanear Casa", "Sair"]
   
   sair(){
    localStorage.removeItem("casa");
    this.route.navigate(['/tela-inicial']);
   }
   
}
