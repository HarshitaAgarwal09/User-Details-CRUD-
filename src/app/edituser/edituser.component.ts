import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

export class EdituserComponent implements OnInit {
	user:User ={
		"id": 1,
		"firstName":"ABC",
		"lastName":"DEF",
		"email":"abc@def"
	};
  constructor(private route:Router, private userservice:UserService) {
	}

  ngOnInit() {
  	let userId = localStorage.getItem("editUserId");
	console.log(userId);   
    if(!userId) {
      alert("Invalid action.")
      this.route.navigate(['userlist']);
      return;
    }
    this.userservice.getUserById(userId).subscribe(
    		data=> {this.user = data}
    	);
  }
 
  updateuser(){
  	this.userservice.updateuser(this.user).subscribe(
  			data=> this.route.navigate(['userlist'])
  		);
  }

}
