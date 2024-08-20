import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private httpService : HttpService) { }

  //to show basic, HRA, allowances
  getSalaryData(id : String) : Observable<any[]>{
    return this.httpService.get<any[]>(`salary/${id}`);
  }

  // To display table of all monthly data
  getMonthlySalaryData(id : String) : Observable<any[]>{
    return this.httpService.get<any[]>(`monthly-salary/${id}`);
  }
}
