import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  isLoggedIn : Boolean = false;

  constructor(private userAuth : UserAuthService , private router : Router){
   // this.isLoggedIn =  this.userAuth.isLoggedIn();

    this.userAuth.getStatus().subscribe(res => {
      this.isLoggedIn = res;
    })
  }


  ngOnInit(): void {
   //this.isLoggedIn = this.userAuth.isLoggedIn();

   this.userAuth.getStatus().subscribe(res => {
    this.isLoggedIn = res;
  })
  }




  login(){
    this.userAuth.login();
    this.router.navigate(['home']);
    
  }
  

  logout(){
    this.userAuth.logout();
   
  }
  




}
