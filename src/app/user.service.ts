import { Injectable } from '@angular/core';
import {User} from './user';
import {Observable , of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	/*USERSDATA.JSON
    {
  "users":[
  {"id": 1, "firstName": "Dhiraj", "lastName": "Ray" , "email": "dhiraj@gmail.com"},
    {"id": 2, "firstName": "Tom", "lastName": "Jac" , "email": "Tom@gmail.com"},
    {"id": 3, "firstName": "Hary", "lastName": "Pan" , "email": "hary@gmail.com"},
    {"id": 4, "firstName": "praks", "lastName": "pba" , "email": "praks@gmail.com"}
 ]
}
  */
  constructor(private http:HttpClient, private route:Router) { }
  getusers():Observable<User[]>{
  	return this.http.get<User[]>("http://localhost:3000/users");
  }
  adduser(user: User){
  return this.http.post("http://localhost:3000/users/", user);
  }
  updateuser(user:User){
  	return this.http.put("http://localhost:3000/users/"+ user.id, user);
  }
  deleteuser(user:User){
    return this.http.delete("http://localhost:3000/users/"+ user.id);
  }
}
