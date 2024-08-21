import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { SalaryService } from '../../../services/salary.service';

@Component({
  selector: 'app-update-salary',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-salary.component.html',
  styleUrl: './update-salary.component.css'
})
export class UpdateSalaryComponent {
  
  salaryForm = new FormGroup({
    employeeId: new FormControl(''),
    basic: new FormControl(''),
    hra: new FormControl(''),
    allowance: new FormControl(''),
    totalCtc: new FormControl(''),
  });

  constructor(private _location: Location, private salaryService: SalaryService, private activatedRoute : ActivatedRoute) {}

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
    this.salaryService.get(this.id).subscribe((res) => {
      console.log(res);
      this.salaryForm.setValue({
        employeeId: res.employeeId,
        basic: res.basic,
        hra: res.hra,
        allowance: res.allowance,
        totalCtc: res.totalCtc
      });
    }, (err) => {
      console.log(err);
    }) 
  }

  updateSalary() {
    this.salaryService.update(this.id, this.salaryForm.value).subscribe((res) => {
      console.log(res);
      this.navigateBack();
    }, (err) => {
      console.log(err);
    })
  }
}
