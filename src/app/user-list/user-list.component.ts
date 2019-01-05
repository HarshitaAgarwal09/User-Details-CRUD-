import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	UsersList:User[];

  constructor(private myservice: UserService, private router:Router) { 
  }

  ngOnInit() {
   this.getusers();
  }
  adduser(): void {
    this.router.navigate(['adduser']);
  };
  getusers(){
 	this.myservice.getusers().subscribe(users => {this.UsersList = users});
  }
  deleteuser(user:User){
    this.myservice.deleteuser(user).subscribe(data => {  
        this.UsersList = this.UsersList.filter(u => u !== user);
        console.log("UserDeleted")  
      })
  }
  updateuser(user:User){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edituser']);
    }
}
