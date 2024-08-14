import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-requests.component.html',
  styleUrl: './leave-requests.component.css'
})
export class LeaveRequestsComponent {
  leaveRequests = [
    {
      name: "Jeremy Neigh",
      startDate: "12/12/12",
      endDate: "12/12/13",
      empId: "54902",
      type: "Sick"
    },
    {
      name: "Rick",
      startDate: "12/12/12",
      endDate: "12/12/13",
      empId: "54912",
      type: "Sick"
    }
  ]
}
