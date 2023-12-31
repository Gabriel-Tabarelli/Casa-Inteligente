import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavModule } from 'src/app/components/nav/nav.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuPrincipalComponent],
  exports: [MenuPrincipalComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    FontAwesomeModule,
    NavModule,
    RouterModule,
    FormsModule
  ]
})
export class MenuPrincipalModule { }
