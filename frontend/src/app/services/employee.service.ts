import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeUrl = "http://localhost:8181/api/v1";

  constructor(private httpService : HttpService) { }

  update(id: String, data: Object) : Observable<any> {
    return this.httpService.put<any>(`${this.employeeUrl}/employees/${id}`, data);
  }

  getEmployee(id: String) : Observable<any> {
    return this.httpService.get<any>(`${this.employeeUrl}/employees/fetchEmployee/${id}`)
  }

  getEmployeeList() : Observable<any[]> {
    return this.httpService.get<any[]>(`${this.employeeUrl}/employees/fetch-all`);
  }
}
