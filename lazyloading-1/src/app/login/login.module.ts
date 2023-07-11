import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '../layout/layout.module';
import { LayoutRoutingModule } from '../layout/layout-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    LayoutModule,
    LayoutRoutingModule,
    MatCheckboxModule
  ],
})
export class LoginModule { }
