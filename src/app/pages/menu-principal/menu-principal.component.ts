import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBed, faKitchenSet, faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private route: Router) {
    if(route.url == '/casa-1/tela-inicial'){
      console.log("casa 1");
    } else if(route.url == '/casa-2/tela-inicial'){
      console.log("casa 2");
    } else if(route.url == '/casa-3/tela-inicial'){
      console.log("casa 3");
    }
  }

  ngOnInit(): void {
  }

  faBed = faBed;
  faKitchenSet = faKitchenSet;
  faGear = faGear;
  faPowerOff = faPowerOff;

  routerLinkComodo(): void {
    this.route.navigate(['comodo']);
  }

}
