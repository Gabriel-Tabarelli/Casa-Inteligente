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
    private routeActivated: ActivatedRoute,
    private route: Router,
    private casaService: CasaService
  ) { }

  casa!: Casa;

  ngOnInit(): void {
    this.routeActivated.params.subscribe(params => {
      console.log(params);
      if (params['id'] == 1) {
        this.casaService.setCasa();
        this.casa = this.casaService.getCasa();

      } else {
        this.route.navigate(['casa/1']);
      }
    });
  }

  faBed = faBed;
  faKitchenSet = faKitchenSet;
  faCouch = faCouch;
  faGear = faGear;
  faPowerOff = faPowerOff;

  // routerLinkComodo(comodo:Comodo): void {
  //   this.route.navigate(['comodo']);
  // }

}
