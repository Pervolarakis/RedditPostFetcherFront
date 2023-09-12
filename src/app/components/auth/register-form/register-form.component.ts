import { Component } from '@angular/core';
import { Register } from '../auth.types';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  repeatPassword: string = "";
  submitted: boolean = false;
  error: [{message: string}]|null = null;

  constructor(private authService: AuthService, private router: Router){
  }

  onSubmit(){
    const registerValues: Register = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword
    };
    this.submitted = true;
    if( this.email.length && this.password.length && this.firstName.length && this.lastName.length && this.repeatPassword.length){
      if(this.repeatPassword !== this.password){
        this.error = [{message: "Passwords dont match"}]
      }else{
        this.authService.onUserRegister(registerValues).subscribe(
          data=>{console.log(data);},
          err=>{
            if(!err.error.success){
              if (typeof err.error.error == "string"){
                this.error = [{message: err.error.error}]
              }else{
                this.error = err.error.error
              }
            }else{
              this.error = null
            }
          },
          ()=>{console.log("completed");}
        );
      }

    }
  }

}
