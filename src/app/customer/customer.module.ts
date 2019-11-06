import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }