import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UploadComponent
 } from './upload/upload.component';
const routes: Routes = [
  {path: 'form',component: FormComponent},
  {path: 'upload',component: UploadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
