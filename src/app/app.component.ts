import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {


  // onSubmit(formValue: any){
  //   const nestedObject = {
  //     name: formValue.userName,
  //     email: formValue.email,
  //     address: [{
  //       street: formValue.address.street,
  //       city: formValue.address.city,
  //       state: formValue.address.state
  //     }]
  //   };

  //   console.log(nestedObject);

    // changeFromParentComponent(){
    //   this.user = "ted";
    // }

    // onNavigation(childValue: any){
    //   this.user = childValue
    // };


}
