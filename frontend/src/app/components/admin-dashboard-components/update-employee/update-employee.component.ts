import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    roleName: new FormControl(''),
  });

  constructor(private _location: Location, private employeeService: EmployeeService, private activatedRoute : ActivatedRoute) {}

  navigateBack() {
    this._location.back();
  }

  id : any = "";
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
    });

    this.fetchEmpoyeeDetails();
  }

  fetchEmpoyeeDetails() {
    this.employeeService.getEmployee(this.id).subscribe((res) => {
      console.log(res);
      this.employeeForm.setValue({
        firstName: res.f_name,
        lastName: res.l_name,
        username: res.email,
        roleName: res.role,
      });
    }, (err) => {
      console.log(err);
    }) 
  }

  updateEmployee() {
    this.employeeService.update(this.id, this.employeeForm.value).subscribe((res) => {
      console.log(res);
      this.fetchEmpoyeeDetails();
    }, (err) => {
      console.log(err);
    })
  }
}
