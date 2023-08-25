import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComodoComponent } from './comodo.component';

@NgModule({
  declarations: [ComodoComponent],
  exports: [ComodoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ComodoModule { }
