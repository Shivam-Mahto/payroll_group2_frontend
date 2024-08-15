import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employeeList = [
    {
      empId: 1,
      name: "Jeremy Neigh",
      role: "Employee",
      email: "jeremy@gmail.com"
    },
    {
      empId: 2,
      name: "Shivam",
      role: "Employee",
      email: "shivam@gmail.com"
    },
    {
      empId: 3,
      name: "jack",
      role: "Accountant",
      email: "jack@gmail.com"
    },
    {
      empId: 4,
      name: "Jeremy Neigh",
      role: "Employee",
      email: "jeremy@gmail.com"
    },
  ]

  searchTerm: string = "";
  filteredEmployeeList = this.employeeList;

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
}
