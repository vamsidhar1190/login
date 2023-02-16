import { PopupComponent } from './../popup/popup.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import UsersJson from "../home/users.Json";
import Swal from 'sweetalert2';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  modalRef?: BsModalRef;

  Users: USERS[] = UsersJson;
  constructor( private Router:Router,private modalService: BsModalService){
    console.log(this.Users);
  }
  details:any
  display=false
  datas=true
  detailsAll=true
  links=true

  data:{id:Number,name:String,username:String,email:String}={
    id:this.Users[0].id,
    name: this.Users[0].name,
    username: this.Users[0].username,
    email: this.Users[0].email,
  }

  ///POPUp
  displayStyle = "none";

  openPopup(dataObj:any) {
    // this.displayStyle = "block";
    // console.log(this.Users[index]);
    // this.data=this.Users[index]
    this.modalRef=this.modalService.show(PopupComponent,{initialState:{data:dataObj}})

  }
  closePopup() {
    this.displayStyle = "none";
  }
  logout(){
    Swal.fire({
      icon:'warning',
      title:'Logout Successfully',
    })
    this.Router.navigate(['/home'])
  }

  ///hiding and showing data
  showdata(){
    this.display=!this.display;

  }
  nodata(){
    this.datas=!this.data
  }
  hide(){
    this.links=true
  }
}
