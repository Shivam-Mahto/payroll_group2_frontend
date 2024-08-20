import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = "http://localhost:8585/api/v1";
  private options = {};

  constructor(private http: HttpClient) { }

  get<T>(url: String, params? : HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`, this.options);
  }

  post<T>(url: String, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, body, this.options);
  }

  patch<T>(url: String, body: any) : Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${url}`, body, this.options);
  }

  put<T>(url: String, body: any) : Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}`, body, this.options);
  }

  delete<T>(url: String, body: any) : Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${url}`,this.options);
  }
}
