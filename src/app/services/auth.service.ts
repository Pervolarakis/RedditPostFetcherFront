import { Injectable } from '@angular/core';
import { Login, Register } from '../components/auth/auth.types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onUserLogin(loginValues: Login): void {
    const login: Login = {
      username: loginValues.username,
      password: loginValues.password
    }    
    return;
  }

  onUserRegister(registerValues: Register): void {
    const register: Register = {
      username: registerValues.username,
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      password: registerValues.password,
      repeatPassword: registerValues.repeatPassword
    }
    return;
  }

}
