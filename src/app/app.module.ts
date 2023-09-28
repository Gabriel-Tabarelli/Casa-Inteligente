import { MenuPrincipalModule } from './pages/menu-principal/menu-principal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from "./app-routing.module";


import { AppComponent } from './app.component';
import { TelaInicialModule } from './pages/tela-inicial/tela-inicial.module';
import { NavModule } from './components/nav/nav.module';
import { ComodoModule } from './pages/comodo/comodo.module';
import { CasaService } from './services/casa.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguracoesModule } from './pages/configuracoes/configuracoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    NavModule,
    TelaInicialModule,
    MenuPrincipalModule,
    ComodoModule,
    HttpClientModule,
    ConfiguracoesModule
  ],
  providers: [
    CasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
