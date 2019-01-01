import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';
const routes: Routes = [
{path:'userlist', component:UserListComponent},
{path:'adduser', component:AddUserComponent},
{path:'', redirectTo:'/userlist', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
