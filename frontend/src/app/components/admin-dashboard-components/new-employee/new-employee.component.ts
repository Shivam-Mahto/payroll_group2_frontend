import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { SalaryService } from '../../../services/salary.service';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  constructor(private _location: Location, private authService: AuthService, private salaryService: SalaryService) {}

  navigateBack() {
    this._location.back();
  }

  newEmployeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    roleName: new FormControl(''),
  });

  createEmployee() {
    this.authService.register(this.newEmployeeForm.value).subscribe((res) => {
      console.log(res);
      this.newEmployeeForm.reset();
      this.createSalary(res.employeeId);
    }, (err) => {
      console.log(err);
    })
  }

  createSalary(id: String) { 
    this.salaryService.create(id,).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
}
