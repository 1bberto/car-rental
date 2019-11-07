import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  {
    path: "",
    component: CarListComponent
  },
  {
    path: ":id/rent",
    component: RentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}