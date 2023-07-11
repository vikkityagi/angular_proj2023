import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  myform1: any = FormGroup;
  userList: any  = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private http:HttpClient){

  }

  ngOnInit(){

    this.myform1 = this.fb.group({
      name: [],
      password: [],
    })

    this.loadData();
  }

  // getter
  get username(){
    return this.myform1.get('name');
  }
  get password(){
    return this.myform1.get('password');
  }

  onSubmit(){
      this.http.post('http://localhost:8081/add',this.myform1.value).subscribe(data=>{
        this.myform1.reset();
      })
      this.loadData();
  }

  loadData(){
    this.http.get('http://localhost:8081/get').subscribe(data=>{
      this.userList = data;
    })
  }

  edit(id: any){
    alert(id);
    // this.myform1.value['id'] = id;
    // this.http.post('http://localhost:8081/add',this.myform1.value).subscribe(data=>{
    //   this.myform1.reset();
    // })
    // this.loadData();
  }
}
