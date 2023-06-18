import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  user: string = '';
  // define form group
  myform: any = FormGroup;

  //define dynamic style
  marginLeftValue: string = '147px';

  constructor() {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit() {
    console.log(this.myform.value)
  }

}
