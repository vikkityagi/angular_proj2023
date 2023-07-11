import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from '../layout/layout.component';



const routes: Routes = [
  {
      path: '',
      component: LoginComponent
  },
  {
    path:'main',
    loadChildren: () => import('../layout/layout.module').then(m=>m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
