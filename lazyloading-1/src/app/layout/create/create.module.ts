import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CreateRoutingModule } from './create-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    CreateRoutingModule,
    HttpClientModule
  ]
})
export class CreateModule { }
