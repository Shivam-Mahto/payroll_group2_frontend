import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent {

  constructor(private _location: Location) { }

  navigateBack() {
    this._location.back();
  }

  leaveApplication = new FormGroup({
    name: new FormControl('Shivam'),
    email: new FormControl('shivam@gmail.com'),
    employeeId: new FormControl('123'),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    reason: new FormControl('')
  })
}
