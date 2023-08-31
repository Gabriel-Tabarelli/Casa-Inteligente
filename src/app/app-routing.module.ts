import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TelaInicialComponent } from "./pages/tela-inicial/tela-inicial.component";
import { MenuPrincipalComponent } from "./pages/menu-principal/menu-principal.component";
import { ComodoComponent } from "./pages/comodo/comodo.component";
import { ConfiguracoesComponent } from "./pages/configuracoes/configuracoes.component";
import { InformacoesGeraisComponent } from "./pages/informacoes-gerais/informacoes-gerais.component";

const routes: Route[] = [
  {
    path: "casa/:id/tela-inicial",
    component: MenuPrincipalComponent,
  },
  {
    path: "comodo",
    component: ComodoComponent,
  },
  {
    path: "configuracoes",
    component: ConfiguracoesComponent,
  },
  {
    path: "informacoes-gerais",
    component: InformacoesGeraisComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "casa-1/tela-inicial",
  }, //default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}