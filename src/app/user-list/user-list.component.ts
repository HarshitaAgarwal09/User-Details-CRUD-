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
    //Navigate to add user component >>Link the the user with this id to the ng Form Elements >> Update the details( Call the update method of the user service)
  }
}
