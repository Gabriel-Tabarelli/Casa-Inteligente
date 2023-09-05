import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ TelaInicialComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [TelaInicialComponent],
})
export class TelaInicialModule { }
