import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

form! : FormGroup;


Fb : FormBuilder = new FormBuilder;

constructor(private userAuthService : UserAuthService , private router : Router){


  this.initForm();
}



initForm(){
  return this.form = this.Fb.group({
    'name': [null , Validators.required],
    'email': [null , Validators.required],
    'password': [null , Validators.required]
  })

}




  submit(){
  
  
    if(this.form.invalid) return;


    this.userAuthService.regiset(this.form.value).subscribe(res => {
      console.log(res);

    })
    console.log(this.form.value);
    this.router.navigate(['home']);
  
  }
  



}
