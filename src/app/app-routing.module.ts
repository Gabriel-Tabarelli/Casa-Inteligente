import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TelaInicialComponent } from "./pages/tela-inicial/tela-inicial.component";

const routes: Route[] = [
  {
    path: "tela-inicial",
    component: TelaInicialComponent,
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