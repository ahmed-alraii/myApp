import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form! : FormGroup;

  Fb : FormBuilder = new FormBuilder;

  isLoggedIn : Boolean = false;

  constructor(private userAuth : UserAuthService , private router : Router){
    this.isLoggedIn =  this.userAuth.isLoggedIn();

    this.userAuth.getStatus().subscribe(res => {
      this.isLoggedIn = res;
    })
  }


  ngOnInit(): void {
   //this.isLoggedIn = this.userAuth.isLoggedIn();
   this.initForm()
   this.userAuth.getStatus().subscribe(res => {
    this.isLoggedIn = res;
  })
  }


  initForm(){
    return this.form = this.Fb.group({
      'email': [null , Validators.required],
      'password': [null , Validators.required]
    })
  
  }


  login(): any{
  //  let user : IUser = {email:"user20@gmail.com" , password:"123456"} as IUser;

  if(this.form.invalid) return false;

   let user = this.form.value as IUser;

    this.userAuth.login(user);

    console.log( );

    if(localStorage.getItem('token') == undefined) {
      return alert('Invalid User!')
    }
    
    this.isLoggedIn =  this.userAuth.isLoggedIn();
     this.router.navigate(['home']);
    
  }
  

  logout(){
    this.userAuth.logout();
   
  }
  




}
