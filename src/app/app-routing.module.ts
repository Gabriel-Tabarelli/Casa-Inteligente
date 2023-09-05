import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TelaInicialComponent } from "./pages/tela-inicial/tela-inicial.component";
import { MenuPrincipalComponent } from "./pages/menu-principal/menu-principal.component";
import { ComodoComponent } from "./pages/comodo/comodo.component";
import { ConfiguracoesComponent } from "./pages/configuracoes/configuracoes.component";
import { InformacoesGeraisComponent } from "./pages/informacoes-gerais/informacoes-gerais.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Route[] = [
  {
    path: "tela-inicial",
    component: TelaInicialComponent,
  },
  {
    path: "menu-principal",
    component: MenuPrincipalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "comodo",
    component: ComodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "configuracoes",
    component: ConfiguracoesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "informacoes-gerais",
    component: InformacoesGeraisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "tela-inicial",
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "tela-inicial",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}