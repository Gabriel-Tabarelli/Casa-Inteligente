import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBed, faKitchenSet, faGear, faPowerOff, faCouch } from '@fortawesome/free-solid-svg-icons';
import { Casa } from 'src/app/models/casa';
import { Comodo } from 'src/app/models/comodo';
import { CasaService } from 'src/app/services/casa.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(
    private route: Router,
    private casaService: CasaService
  ) { }


  casa!: Casa;
  ngOnInit(): void {
    this.casa = this.casaService.getCasa();
  }
  
  //icones
  faBed = faBed;
  faKitchenSet = faKitchenSet;
  faCouch = faCouch;
  faGear = faGear;
  faPowerOff = faPowerOff;


  routerComodo(comodo: Comodo): void {
    localStorage.setItem('comodo', JSON.stringify(comodo));
    this.route.navigate(['comodo']);
  }
}
