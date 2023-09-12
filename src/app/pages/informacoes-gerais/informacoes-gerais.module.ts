import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InformacoesGeraisComponent } from './informacoes-gerais.component';
import { NavModule } from 'src/app/components/nav/nav.module';


@NgModule({
  declarations: [InformacoesGeraisComponent],
  exports:[InformacoesGeraisComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NavModule
  ]
})
export class InformacoesGeraisModule { }
