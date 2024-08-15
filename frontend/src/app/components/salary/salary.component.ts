import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
      basic : "6L",
      hra : "6L",
      allowances : "40k"
    }

  salaryList = [
    {
      employeeId: 1,
      name: "Shivam",
      month: "January",
      salary: "40,000"
    },
    {
      employeeId: 1,
      name: "Shivam",
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
}
