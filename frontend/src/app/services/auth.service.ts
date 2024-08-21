import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService) { }

  register(data: Object) : Observable<any> {
    return this.httpService.post<any>('auth/register', data);
  }  

  login(data: Object) : Observable<any> {
    return this.httpService.post<any>('auth/login', data);
  }

  resetPassword(data: Object) : Observable<any> {
    return this.httpService.put<any>('auth/resetPassword', data);
  }

  resetPasswordWithToken(data: Object) : Observable<any> {
    return this.httpService.post<any>('auth/reset_forgotPassword', data);
  }
  
  forgotPasswordEmail(data: Object) : Observable<any> {
    return this.httpService.post<any>('auth/token_forgot_password', data);
  }

} 
