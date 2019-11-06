import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";
import { SharedModule } from "./shared/shared.module";

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

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
    redirectTo: "/home",
    pathMatch: 'full'
  },
  { path: "not-found", component: PageNotFoundComponent },
  { 
    path: "**", 
    redirectTo: "/not-found",
    pathMatch: 'full' 
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule {}
