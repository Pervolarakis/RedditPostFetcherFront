import { Injectable } from '@angular/core';
import { Login, Register } from '../components/auth/auth.types';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthServiceInterface, CurrentUser } from './authService.types';
import { Router } from '@angular/router';

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
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('current-user');
    this._isLoggedIn.next(!!token);
  }

  onUserLogin(loginValues: Login): Observable<void> {
    const login: Login = {
      email: loginValues.email,
      password: loginValues.password
    };
    return this.http.post<AuthServiceInterface>(`${this.apiUrl}/login`, login, httpOptions).pipe(
      map((res: any)=>{
        this._isLoggedIn.next(true)
        localStorage.setItem("current-user", res.token);
        this.router.navigate(["/dashboard"]);
      }),
      catchError((err)=>{throw err})
    );
  }

  onUserRegister(registerValues: Register): Observable<void> {
    const register: Register = {
      firstName: registerValues.firstName,
      lastName: registerValues.lastName,
      email: registerValues.email,
      password: registerValues.password,
      repeatPassword: registerValues.repeatPassword
    }
    return this.http.post<AuthServiceInterface>(`${this.apiUrl}/register`, register, httpOptions).pipe(
      map((res: any)=>{
        this._isLoggedIn.next(true)
        localStorage.setItem("current-user", res.token);
        this.router.navigate(["/dashboard"]);
      }),
      catchError((err)=>{throw err})
    );;
  }

  getCurrentUser(){
    const token:String|null = localStorage.getItem("current-user");
    if(token){
      const currentUser: CurrentUser  = JSON.parse(atob(token.split('.')[1]));
      return currentUser.email;
    }else{
      return token;
    }
  }

  logOutUser(){
    localStorage.removeItem("current-user")
    this._isLoggedIn.next(false)
    this.router.navigate(["/login"]);
  }

}
