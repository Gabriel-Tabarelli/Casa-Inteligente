import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TelaInicialComponent } from "./pages/tela-inicial/tela-inicial.component";
import { MenuPrincipalComponent } from "./pages/menu-principal/menu-principal.component";
import { ComodoComponent } from "./pages/comodo/comodo.component";

const routes: Route[] = [
  {
    path: "tela-inicial",
    component: MenuPrincipalComponent,
  },
  {
    path: "comodo",
    component: ComodoComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "tela-inicial",
  }, //default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}