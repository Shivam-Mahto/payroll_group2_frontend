import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  constructor(private _location: Location) {}

  navigateBack() {
    this._location.back();
  }

  newEmployeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl(''),
    role: new FormControl(''),
    ctc: new FormControl(''),
  });

}
