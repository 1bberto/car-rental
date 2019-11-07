import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CarModule } from "../car/car.module";
import { CustomerModule } from "../customer/customer.module";

import { HomeComponent } from './home/home.component';

import { AuthGuard } from '../shared/security/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [ AuthGuard ],
    children: [
    {
      path: "cars",
      loadChildren: () => CarModule
    },
    {
      path: "customers",
      loadChildren: () => CustomerModule
    }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}