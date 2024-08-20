import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService : HttpService) { }

  getEmployeeList(id: String) : Observable<any[]> {
    return this.httpService.get<any[]>(`users/${id}`);
  }
}
