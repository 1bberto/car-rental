import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => HomeModule
  },
  {
    path: "login",
    loadChildren: () => LoginModule
  },
  {
    path: "",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
