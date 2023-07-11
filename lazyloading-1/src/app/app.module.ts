import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { CreateModule } from './layout/create/create.module';
import { CreateRoutingModule } from './layout/create/create-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    LoginModule,
    LayoutModule,
    LayoutRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CreateRoutingModule,
    CreateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
