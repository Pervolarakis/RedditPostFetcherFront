import { Component } from '@angular/core';
import { Register } from '../auth.types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  repeatPassword: string = "";

  constructor(private authService: AuthService){
  }

  onSubmit(){
    const registerValues: Register = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword
    };

    this.authService.onUserRegister(registerValues);

  }

}
