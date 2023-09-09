import { Component, Output, EventEmitter } from '@angular/core';
import { Login } from '../auth.types';
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() onLoginSubmit: EventEmitter<Login> = new EventEmitter();
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService){
  }

  onSubmit(){
    const loginValues: Login = {
      username: this.username,
      password: this.password
    };

    this.authService.onUserLogin(loginValues);

  }

}
