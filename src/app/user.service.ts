import { Injectable } from '@angular/core';
import {User} from './user';
import {Users} from './users-data';
import {Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getusers():Observable<User[]>{
  	return of(Users);
  }
}
