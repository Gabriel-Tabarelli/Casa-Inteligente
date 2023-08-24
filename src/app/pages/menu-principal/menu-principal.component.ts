import { Component, OnInit } from '@angular/core';
import { faBed, faKitchenSet, faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faBed = faBed;
  faKitchenSet = faKitchenSet;
  faGear = faGear;

}
