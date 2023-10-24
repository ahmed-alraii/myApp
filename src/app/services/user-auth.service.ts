import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../Models/iuser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  private userLoggedIn : BehaviorSubject<Boolean>;

  constructor(private http : HttpClient) { 

   this.userLoggedIn = new BehaviorSubject<Boolean>(false);

  }

   login(user : IUser): any{
    let result : any;
  this.http.get<IUser[]>(`${environment.apiUrl}/users`).subscribe(res => {

      let users =  res;
      let existedUser: any =  users.find(x => x.email == user.email && x.password == user.password);

     
       if(existedUser == undefined)   result = {message : 'Invalid User'}
       else{
        let token = '123456789abcde';
        localStorage.setItem('token' , token);
        this.userLoggedIn.next(true);
        
       }
  
    });
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

   regiset(user : IUser) : Observable<IUser>{

   return this.http.post<IUser>(`${environment.apiUrl}/users` , JSON.stringify(user) , {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    } )

   }
    
}
