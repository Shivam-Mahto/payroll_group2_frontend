import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService : HttpService) { }

  update(id: String, data: Object) : Observable<any> {
    return this.httpService.put<any>(`employees/${id}`, data);
  }

  getEmployee(id: String) : Observable<any> {
    return this.httpService.get<any>(`employees/fetchEmployee/${id}`)
  }

  getEmployeeList() : Observable<any[]> {
    return this.httpService.get<any[]>(`employees/fetch-all`);
  }
}
