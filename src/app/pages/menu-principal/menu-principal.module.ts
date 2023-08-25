import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuPrincipalComponent],
  exports: [MenuPrincipalComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    FontAwesomeModule
  ]
})
export class MenuPrincipalModule { }
