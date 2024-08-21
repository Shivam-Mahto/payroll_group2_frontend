import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { LeavesService } from '../../services/leaves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent {

  constructor(private _location: Location, private leavesService: LeavesService, private router: Router) { }

  navigateBack() {
    this._location.back();
  }

  leaveApplication = new FormGroup({
    employeeId: new FormControl(localStorage.getItem('userId')),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    leaveType: new FormControl('')
  })

  applyLeave() {
    this.leavesService.create(this.leaveApplication.value).subscribe((res) => {
      console.log(res);
      this.leaveApplication.reset();
      // this.router.navigate(['/leaves']);
    }, (err) => {
      console.log(err);
    })
  }
}
