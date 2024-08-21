import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  salaryUrl = "http://localhost:8282/api/v1";

  constructor(private httpService : HttpService) { }

  get(id: String) : Observable<any> {
    return this.httpService.get<any>(`${this.salaryUrl}/salary/fetchById/${id}`);
  }

  create(id: String) : Observable<any>{
    return this.httpService.post<any>(`${this.salaryUrl}/salary/create/${id}`, {
      employeeId: id,
      basic: 0,
      hra: 0,
      allowance: 0,
      totalCtc: 0
    });
  }

  update(id: String, data: Object) : Observable<any> {
    return this.httpService.put<any>(`${this.salaryUrl}/salary/updateById/${id}`, data);
  }

  generate(data: Object) : Observable<any> {
    return this.httpService.post<any>(`${this.salaryUrl}/leaves/salary/generate`, data);
  }

  getPerMonth(id: String) : Observable<any> {
    return this.httpService.get<any>(`${this.salaryUrl}/salary/fetchPerMonth/${id}`);
  }

  getAllPerMonth() : Observable<any> {
    return this.httpService.get<any>(`${this.salaryUrl}/salary/fetchAllPerMonth`);
  }

}
