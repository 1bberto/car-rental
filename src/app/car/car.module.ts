import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { CarRoutingModule } from './car-routing.module';

import { CarComponent } from './car/car.component';
import { RentComponent } from './rent/rent.component';
import { CarService } from './services/car.service';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule
  ],
  declarations: [CarComponent, RentComponent, CarListComponent],
  providers: [CarService]
})
export class CarModule { }