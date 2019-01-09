import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup = this.formBuilder.group({
  		email: ['',Validators.required],
  		password: ['',Validators.required]
  	});

  submit:boolean = false;

  constructor(private formBuilder:FormBuilder, private route:Router) { }

  ngOnInit() {
  	
  }

  onSubmit(){
  	if(this.LoginForm.invalid){
  		alert("Invalid");
  	}
  	if(this.LoginForm.get('email').value == "abc@gmail.com" && this.LoginForm.get('password').value == "1234")
  		{	console.log('values', this.LoginForm.value);
  			this.route.navigate(['userlist']);
  		}
  	
  	else {
  		alert('Incorrect Id or password')
  	}
  }

}