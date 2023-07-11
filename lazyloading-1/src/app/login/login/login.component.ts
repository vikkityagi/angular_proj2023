import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myform: any = FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router){

  }

  ngOnInit(){

    this.myform = this.fb.group({
      username: [],
      password: [],
    })

  }

  // getter
  get username(){
    return this.myform.get('username');
  }
  get password(){
    return this.myform.get('password');
  }

  onSubmit(){

    if(this.username.value=='admin' && this.password.value=='123'){
      this.router.navigate(['/main'])
    }

  }

}
