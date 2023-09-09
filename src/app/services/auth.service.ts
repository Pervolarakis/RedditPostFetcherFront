import { Injectable } from '@angular/core';
import { Login, Register } from '../components/auth/auth.types';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthServiceInterface } from './authService.types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string = 'http://localhost:4000/api/v1/users/auth'

  constructor(private http: HttpClient) { }

  onUserLogin(loginValues: Login): Observable<AuthServiceInterface> {
    const login: Login = {
      email: loginValues.email,
      password: loginValues.password
    };
    return this.http.post<AuthServiceInterface>(`${this.apiUrl}/login`, login, httpOptions);
  }

  onUserRegister(registerValues: Register): Observable<AuthServiceInterface> {
    const register: Register = {
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      password: registerValues.password,
      repeatPassword: registerValues.repeatPassword
    }
    return this.http.post<AuthServiceInterface>(`${this.apiUrl}/register`, register, httpOptions);
  }

}
