import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from './../material/material.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }