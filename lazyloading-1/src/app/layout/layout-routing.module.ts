import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {
    path: '',component: LayoutComponent,

    children:[
      {path: '', component: DashboardComponent},
      { path: 'create',loadChildren: () => import('./create/create.module').then(m=>m.CreateModule)},
      {path: 'login',loadChildren: () => import('.././login/login.module').then(m => m.LoginModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
