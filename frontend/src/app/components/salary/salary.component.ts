import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalaryService } from '../../services/salary.service';

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent {

  salaryComponent = 
  {
    id: "",
    employeeId: "",
    basic: "",
    hra: "",
    allowance: "",
    totalCtc: ""
  }

  salaryList = [
    {
      employeeId: 1,
      name: "dummy",
      month: "January",
      salary: "40,000"
    },
    {
      employeeId: 1,
      name: "dummy",
      month: "February",
      salary: "40,000"
    },
    {
      employeeId: 1,
      name: "Shivam",
      month: "March",
      salary: "40,000"
    },
    {
      employeeId: 1,
      name: "Shivam",
      month: "April",
      salary: "40,000"
    }
  ]

  constructor(private salaryService : SalaryService) { }

  ngOnInit() {
    this.fetchSalaryDetails(localStorage.getItem('userId') || "");
    this.fetchMonthlySalaryList(localStorage.getItem('userId') || "");
  }

  selectedMonth: string = 'All'; // Default to 'All'
  filteredSalaryList: any[] = this.salaryList;

  months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  onMonthChange(month: string) {
    console.log(month);
    this.selectedMonth = month;
    this.filterSalary();
  }

  // default javascript date has mmddyyyy format
  filterSalary() {
    if (this.selectedMonth === 'All') {
      this.filteredSalaryList = this.salaryList;
    } else { 
      this.filteredSalaryList = this.salaryList.filter(salary => {
        // console.log(salary.month);
        return salary.month == this.selectedMonth
      });
    }
  }


  fetchSalaryDetails(id : String) {
    this.salaryService.get(id).subscribe(
      (res) => {
        console.log(res);
        this.salaryComponent = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }
  
  fetchMonthlySalaryList(id : String) {
    this.salaryService.getPerMonth(id).subscribe(
      (res) => {
        console.log(res);
        this.salaryList = res;
        this.filteredSalaryList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
