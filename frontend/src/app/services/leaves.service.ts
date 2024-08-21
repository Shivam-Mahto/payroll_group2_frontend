import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private httpService: HttpService) { }

  create(data: Object) : Observable<any> {
    return this.httpService.post<any>('leaves/take', data);
  }

  accept(id : String) : Observable<any> {
    return this.httpService.patch<any>(`leaves/status/approve/${id}`, {});
  }

  reject(id: String) : Observable<any> {
    return this.httpService.patch<any>(`leaves/status/reject/${id}`, {});
  }

  getAllLeaves(id: String) : Observable<any[]> {
    return this.httpService.get<any[]>(`leaves/${id}`);
  }

  getAllPendingRequests() : Observable<any[]> {
    return this.httpService.get<any[]>(`leaves/fetchAllPending`,);
  }

}
