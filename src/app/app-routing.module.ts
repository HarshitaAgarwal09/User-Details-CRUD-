import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EdituserComponent} from './edituser/edituser.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'userlist', component:UserListComponent},
{path:'adduser', component:AddUserComponent},
{path:'edituser', component:EdituserComponent},
{path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
