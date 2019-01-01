import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Users} from '../users-data';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	UsersList:User[];

  constructor(private myservice: UserService) { 
  }

  ngOnInit() {
   this.getusers();
  }
  getusers(){
 	this.myservice.getusers().subscribe(users => {this.UsersList = users});
  }

}
