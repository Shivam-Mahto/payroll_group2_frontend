import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {

  constructor(private httpService: HttpService) { }

  getAllLeaves(id: String) : Observable<any[]> {
    return this.httpService.get<any[]>(`leaves/${id}`);
  }

  getAllPendingRequests() : Observable<any[]> {
    return this.httpService.get<any[]>(`leaves/fetchAllPending`,);
  }

}
