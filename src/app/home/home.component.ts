import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import UsersJson from "../home/users.Json";



///This is taking Json data values
interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ///JSON Data
  Users: USERS[] = UsersJson;

  username:string | undefined;
  password: string | undefined;

  constructor( private router:Router){
    console.log(this.Users);
  }

///Login Validations

  regForm= new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.minLength(5)]),
    password:new FormControl("",[Validators.required,Validators.minLength(3)])
  })
  submit(){
    this.regForm
    console.log(this.regForm.value);
    for (let i = 0; i < this.Users.length; i++) {
      if(this.regForm.get('uname')?.value=== this.Users[i].name && this.regForm.get('password')?.value===this.Users[i].email){
        console.log("Login Successful");
        Swal.fire({
          icon: 'success',
          title: 'login successfully',
        })
        this.router.navigate(['/details'])

        break;
      }else{
        console.log("login Failed");
        Swal.fire({
          icon: 'warning',
          title:'login Failed',
        })
      }
    }
  }
  reset(){
    this.regForm.reset()
    console.log(this.regForm.value);
}

}
