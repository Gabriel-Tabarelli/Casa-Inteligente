import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [ TelaInicialComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    
  ],
  exports: [TelaInicialComponent],
})
export class TelaInicialModule { }
