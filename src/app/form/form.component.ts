import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  myform:any =  FormGroup;
  jsonFile: any = {};

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.myform = this.fb.group({
      userName: [],
      email: [],
      password: [],
      cPassword: []
    })
  }

  get userName(){
    return this.myform.get('userName');
  }
  get email(){
    return this.myform.get('email');
  }
  get password(){
    return this.myform.get('password');
  }
  get cpassword(){
    return this.myform.get('cPassword');
  }


  onFileChange(file: any){
    // console.log(file.target.files[0])
    const localFile = file.target.files[0];
    const reader  = new FileReader();
    reader.readAsDataURL(localFile);
    console.log(reader);
    reader.onload = () => {
      console.log((<string>reader.result).split(",")[1]);
      this.jsonFile["file"] = reader.result;
      // //console.log(typeof reader.result)
    };
  }


  onSubmit(){
    console.log(this.email.value);
    this.jsonFile = {
      "userName": this.userName.value,
      "email": this.email.value,
      "password": this.password.value,
      "cpassword": this.cpassword.value,
      "file": this.jsonFile.file
    }
    console.log(JSON.stringify(this.jsonFile))
  }

}
