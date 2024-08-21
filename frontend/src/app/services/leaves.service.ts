import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  leaveUrl = "http://localhost:8282/api/v1";

  constructor(private httpService: HttpService) { }

  create(data: Object) : Observable<any> {
    return this.httpService.post<any>(`${this.leaveUrl}/leaves/take`, data);
  }

  accept(id : String) : Observable<any> {
    return this.httpService.patch<any>(`${this.leaveUrl}/leaves/status/approve/${id}`, {});
  }

  reject(id: String) : Observable<any> {
    return this.httpService.patch<any>(`${this.leaveUrl}/leaves/status/reject/${id}`, {});
  }

  getAllLeaves(id: String) : Observable<any[]> {
    return this.httpService.get<any[]>(`${this.leaveUrl}/leaves/${id}`);
  }

  getAllPendingRequests() : Observable<any[]> {
    return this.httpService.get<any[]>(`${this.leaveUrl}/leaves/fetchAllPending`,);
  }

}
