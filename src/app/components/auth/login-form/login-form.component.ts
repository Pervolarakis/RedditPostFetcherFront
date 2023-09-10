import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from '../auth.types';
import {AuthService} from '../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() onLoginSubmit: EventEmitter<Login> = new EventEmitter();
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router){
  }

  onSubmit(){
    const loginValues: Login = {
      email: this.email,
      password: this.password
    };

    this.authService.onUserLogin(loginValues).subscribe((res)=> {
      localStorage.setItem("current-user", res.token);
      this.router.navigate(["/dashboard"]);
    });

  }

}
