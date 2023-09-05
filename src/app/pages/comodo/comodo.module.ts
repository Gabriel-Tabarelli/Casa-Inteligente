import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComodoComponent } from './comodo.component';
import { NavModule } from 'src/app/components/nav/nav.module';

@NgModule({
  declarations: [ComodoComponent],
  exports: [ComodoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NavModule
  ]
})
export class ComodoModule { }
