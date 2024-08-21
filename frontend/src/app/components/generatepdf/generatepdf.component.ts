import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';
import { EmployeeService } from '../../services/employee.service';
import { SalaryService } from '../../services/salary.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generatepdf',
  standalone: true,
  imports: [CommonModule, NgxPrintModule],
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.css']
})
export class GeneratepdfComponent {
  userDetails = {
    id : 1,
    f_name : 'Rajanandini',
    l_name : "Tiwari",
  }

  salaryDetails = {
    basic : "",
    hra : "",
    allowance : "",
  }

  salaryPerMonthDetails = {
    month: "",
    year: "",
    salary: "",
  }
  
  constructor(private employeeService: EmployeeService, private salaryService: SalaryService, private activatedRoute : ActivatedRoute) {}
  
  id : any = "";
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });

    this.fetchSalaryDetails();
    this.fetchEmployeeDetails();
    this.fetchMonthSalary();
  }
  
  fetchSalaryDetails() {
    this.salaryService.get(localStorage.getItem('userId') || "").subscribe((res) => {
      this.salaryDetails = res;
    }, (err) => {
      console.log(err);
    })
  }

  fetchEmployeeDetails() {
    this.employeeService.getEmployee(localStorage.getItem('userId') || "").subscribe((res) => {
      console.log(res);
      this.userDetails = res;
    }, (err) => {
      console.log(err);
    })
  }

  fetchMonthSalary() {
    this.salaryService.getPerMonth(localStorage.getItem('userId') || "").subscribe((res) => {
      console.log(res);
      for(let salary of res) {
        if(salary.id == this.id) {
          this.salaryPerMonthDetails = salary;
          console.log(this.salaryPerMonthDetails);
        }
      }
    }, (err) => {
      console.log(err);
    })
  }
}