import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import  { CustomerComponent } from './customer/customer.component';
import { ClientService } from './services/client.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerComponent],
  providers: [ClientService]
})
export class CustomerModule { }