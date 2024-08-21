import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8585/api/v1";

  constructor(private httpService: HttpService) { }

  register(data: Object) : Observable<any> {
    return this.httpService.post<any>(`${this.authUrl}/auth/register`, data);
  }  

  login(data: Object) : Observable<any> {
    return this.httpService.post<any>(`${this.authUrl}/auth/login`, data);
  }

  resetPassword(data: Object) : Observable<any> {
    return this.httpService.put<any>(`${this.authUrl}/auth/resetPassword`, data);
  }

  resetPasswordWithToken(data: Object) : Observable<any> {
    return this.httpService.post<any>(`${this.authUrl}/auth/reset_forgotPassword`, data);
  }
  
  forgotPasswordEmail(data: Object) : Observable<any> {
    return this.httpService.post<any>(`${this.authUrl}/auth/token_forgot_password`, data);
  }

} 
