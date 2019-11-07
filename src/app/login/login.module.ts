import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }