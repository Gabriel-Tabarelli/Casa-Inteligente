import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from "./app-routing.module";


import { AppComponent } from './app.component';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { ComodoComponent } from './pages/comodo/comodo.component';
import { InformacoesGeraisComponent } from './pages/informacoes-gerais/informacoes-gerais.component';
import { TelaInicialModule } from './pages/tela-inicial/tela-inicial.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ConfiguracoesComponent,
    ComodoComponent,
    InformacoesGeraisComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    TelaInicialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
