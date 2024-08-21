import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = "";
  private options = {};

  constructor(private http: HttpClient) { }

  get<T>(url: String, params? : HttpParams): Observable<T> {
    return this.http.get<T>(`${url}`, this.options);
  }

  post<T>(url: String, body: any): Observable<T> {
    return this.http.post<T>(`${url}`, body, this.options);
  }

  patch<T>(url: String, body: any) : Observable<T> {
    return this.http.patch<T>(`${url}`, body, this.options);
  }

  put<T>(url: String, body: any) : Observable<T> {
    return this.http.put<T>(`${url}`, body, this.options);
  }

  delete<T>(url: String, body: any) : Observable<T> {
    return this.http.delete<T>(`${url}`,this.options);
  }
}
