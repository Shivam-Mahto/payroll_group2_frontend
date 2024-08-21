import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private httpService : HttpService) { }

  get(id: String) : Observable<any> {
    return this.httpService.get<any>(`salary/fetchById/${id}`);
  }

  create(id: String) : Observable<any>{
    return this.httpService.post<any>(`salary/create/${id}`, {
      employeeId: id,
      basic: 0,
      hra: 0,
      allowance: 0,
      totalCtc: 0
    });
  }

  update(id: String, data: Object) : Observable<any> {
    return this.httpService.put<any>(`salary/updateById/${id}`, data);
  }

  generate(data: Object) : Observable<any> {
    return this.httpService.post<any>('leaves/salary/generate', data);
  }

  getPerMonth(id: String) : Observable<any> {
    return this.httpService.get<any>(`salary/fetchPerMonth/${id}`);
  }

  getAllPerMonth() : Observable<any> {
    return this.httpService.get<any>('salary/fetchAllPerMonth');
  }

  //to show basic, HRA, allowances
  // getSalaryData(id : String) : Observable<any[]>{
  //   return this.httpService.get<any[]>(`salary/${id}`);
  // }

  // To display table of all monthly data
  // getMonthlySalaryData(id : String) : Observable<any[]>{
  //   return this.httpService.get<any[]>(`monthly-salary/${id}`);
  // }
}
