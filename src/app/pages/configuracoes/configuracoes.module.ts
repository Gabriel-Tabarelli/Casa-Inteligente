import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfiguracoesComponent } from './configuracoes.component';
import { NavModule } from 'src/app/components/nav/nav.module';


@NgModule({
  declarations: [ConfiguracoesComponent],
  exports: [ConfiguracoesComponent],
  imports: [
    CommonModule, 
    FontAwesomeModule,
    NavModule
  ],
  
})
export class ConfiguracoesModule { }
