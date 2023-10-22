import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  private userLoggedIn : BehaviorSubject<Boolean>;

  constructor() { 

   this.userLoggedIn = new BehaviorSubject<Boolean>(false);

  }

   login(){
    let token = '123456789abcde';
    localStorage.setItem('token' , token);
    this.userLoggedIn.next(true);
   }


   logout(){
      localStorage.removeItem('token');
      this.userLoggedIn.next(false);
   }


   isLoggedIn(){
    return localStorage.getItem('token')? true : false ;
   }

   getStatus(){
    return this.userLoggedIn.asObservable();
   }
    
}
