// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, {"email":email, "password":password});
  }

  register(username: string, email: string, password: string ): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, {username, email, password});
  }

  //forgotPassword(email: string): Observable<any> {
    //return this.http.post(`${this.apiUrl}/auth/forgot-password?email=` + {email} );
  //}
}
