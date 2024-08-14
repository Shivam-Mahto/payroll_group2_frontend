import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.css'
})
export class LeaveFormComponent {

  leavesList = [
    {
      name: "Shivam",
      startDate: "01/02/2024",
      endDate: "02/02/2024",
      employeeId: 1,
      type: 'sick',
      status: "pending"
    },
    {
      name: "Shivam",
      startDate: "01/02/2024",
      endDate: "02/02/2024",
      employeeId: 2,
      type: 'sick',
      status: "pending"
    },
    {
      name: "Shivam",
      startDate: "01/02/2024",
      endDate: "02/02/2024",
      employeeId: 3,
      type: 'sick',
      status: "pending"
    }
  ]
}
