import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  // employeeList : any[] = []

  employeeList = [
    {
      empId: 1,
      name: "chip",
      role: "Employee",
      email: "jeremy@gmail.com"
    },
    {
      empId: 2,
      name: "tapak",
      role: "Employee",
      email: "shivam@gmail.com"
    },
    {
      empId: 3,
      name: "dum",
      role: "Accountant",
      email: "jack@gmail.com"
    },
    {
      empId: 4,
      name: "dum",
      role: "Employee",
      email: "jeremy@gmail.com"
    },
  ]

  searchTerm: string = "";
  filteredEmployeeList = this.employeeList;

  constructor(private employeeService : EmployeeService) {}

  ngOnInit() {
    this.fetchEmployeeList("id");
    this.filteredEmployeeList = this.employeeList;
  }

  searchLeaveRequests() {
    
    // console.log("called searchLeaveRequest: ", text);

    if (this.searchTerm == "")
      this.filteredEmployeeList = this.employeeList;
    else {
      this.filteredEmployeeList = this.employeeList.filter(employee =>
        employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  fetchEmployeeList(id : String) {
    this.employeeService.getEmployeeList("id").subscribe(
      (res) => {
        console.log(res);
        this.employeeList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
