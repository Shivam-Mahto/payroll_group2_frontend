import { CommonModule, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { SalaryService } from '../../../services/salary.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-generate-payslip',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
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

  // salaryList = [];

  generateSalaryForm = new FormGroup({
    employeeId: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl('')
  });

  constructor(private salaryService: SalaryService) { }

  selectedMonth: string = 'All'; // Default to 'All'
  filteredSalaryList: any[] = this.salaryList;

  months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  years = [
    '2023',
    '2024'
  ];
  
  ngOnInit() {
    this.fetchAllSalary();
  }

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
        console.log(salary.month);
        return salary.month == this.selectedMonth
      });
    }
  }

  generateSalary() {
    console.log(this.generateSalaryForm.value);
    this.salaryService.generate(this.generateSalaryForm.value).subscribe((res) => {
      console.log(res);
      this.fetchAllSalary();
    }, (err) => {
      console.log(err);
    });
  }

  fetchAllSalary() {
    this.salaryService.getAllPerMonth().subscribe((res) => {
      console.log(res);
      this.salaryList = res;
      this.filteredSalaryList = res;
    }, (err) => {
      console.log(err);
    })
  }
}
