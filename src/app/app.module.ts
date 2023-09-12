import { MenuPrincipalModule } from './pages/menu-principal/menu-principal.module';
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
import { NavModule } from './components/nav/nav.module';
import { ComodoModule } from './pages/comodo/comodo.module';
import { CasaService } from './services/casa.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InformacoesGeraisModule } from './pages/informacoes-gerais/informacoes-gerais.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    NavModule,
    TelaInicialModule,
    MenuPrincipalModule,
    ComodoModule,
    HttpClientModule,
    InformacoesGeraisModule
  ],
  providers: [
    CasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
