import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-payslip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generate-payslip.component.html',
  styleUrl: './generate-payslip.component.css'
})
export class GeneratePayslipComponent {

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

  years = [
    '2023',
    '2024'
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
