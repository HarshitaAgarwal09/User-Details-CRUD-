import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user : User = {
    "id": 1,
    "firstName": "Harshi",
    "lastName": "Ag",
    "email": "ha@gmail",
  };
  constructor(private userservice: UserService, private route:Router) { 

  }
  ngOnInit() {
  }
  adduser(){
  	   this.userservice.adduser(this.user).subscribe( 
      data =>{this.route.navigate(['userlist'])}, 
      error => { console.log("ERROR",error) })
  }
  updateuser(user:User){
    this.userservice.updateuser(user).subscribe(
      data=>{this.route.navigate(['userlist'])});
  }
}