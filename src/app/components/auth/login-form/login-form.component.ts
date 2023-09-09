import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() onLogin: EventEmitter<Login> = new EventEmitter();
  username: string = "";
  password: string = "";

  onSubmit(){
    const loginValues: Login = {
      username: this.username,
      password: this.password
    };

    this.onLogin.emit(loginValues);

  }

}
