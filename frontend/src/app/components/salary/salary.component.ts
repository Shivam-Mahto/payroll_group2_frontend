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
      basic : "dummy",
      hra : "dummy",
      allowances : "dummy"
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
    this.fetchSalaryDetails("id");
    this.fetchMonthlySalaryList("id");
  }

  selectedMonth: string = 'All'; // Default to 'All'
  filteredSalaryList: any[] = this.salaryList;

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
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


  //fetching Basic Salary Data
  fetchSalaryDetails(id : String) {
    this.salaryService.getSalaryData(id).subscribe(
      (res) => {
        console.log(res);
        this.salaryComponent = res[0];  //ASSUMING FIRST OBJECT
      },
      (err) => {
        console.log(err);
      }
    )
  }

  //fetching Monthly Salary Data
  fetchMonthlySalaryList(id : String) {
    this.salaryService.getMonthlySalaryData(id).subscribe(
      (res) => {
        console.log(res);
        this.salaryList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }


}
