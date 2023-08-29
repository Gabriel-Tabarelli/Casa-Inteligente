import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBed, faKitchenSet, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  faBed = faBed;
  faKitchenSet = faKitchenSet;
  faGear = faGear;
  faPowerOff = faPowerOff;

  routerLinkComodo(): void {
    this.router.navigate(['comodo']);
  }

}
