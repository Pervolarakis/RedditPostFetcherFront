import { Injectable } from '@angular/core';
import { Login } from '../components/auth/auth.types';
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

}
