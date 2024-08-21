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

  employeeList : any[] = [];
  searchTerm: string = "";
  filteredEmployeeList = this.employeeList;

  constructor(private employeeService : EmployeeService) {}

  ngOnInit() {
    this.fetchEmployeeList();
  }

  filterEmployeeList() {
    
    // console.log("called searchLeaveRequest: ", text);

    console.log(this.fetchEmployeeList);

    if (this.searchTerm == "")
      this.filteredEmployeeList = this.employeeList;
    else {
      this.filteredEmployeeList = this.employeeList.filter(employee => {
        const temp = employee.f_name + employee.l_name;
        return temp.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      }
      );
    }
  }

  fetchEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(
      (res) => {
        console.log(res);
        this.employeeList = res;
        this.filteredEmployeeList = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
