import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from '../auth.types';
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";
  submitted: boolean = false;
  error: [{message: string}]|null = null;
  constructor(private authService: AuthService){
  }

  onSubmit(){
    const loginValues: Login = {
      email: this.email,
      password: this.password
    };
    this.submitted = true;
    if( this.email.length && this.password.length){
      this.authService.onUserLogin(loginValues).subscribe(
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
          
        //   (!err.error.success) ? () => {
        //   console.log(err.error.error)
        //   this.error = err.error.error
        // } : this.error = null},
        ()=>{console.log("completed");}
      );
    }
    
  }

}
