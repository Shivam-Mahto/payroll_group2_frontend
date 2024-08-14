import { CommonModule } from '@angular/common';
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


  selectedMonth: string = 'All'; // Default to 'All'
  filteredLeaves: any[] = this.leavesList;

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  onMonthChange(month: string) {
    this.selectedMonth = month;
    this.filterLeaves();
  }

  filterLeaves() {
    if (this.selectedMonth === 'All') {
      this.filteredLeaves = this.leavesList;
    } else {
      const monthIndex = this.months.indexOf(this.selectedMonth) + 1;
      this.filteredLeaves = this.leavesList.filter(leave => {
        const leaveMonth = new Date(leave.startDate).getMonth() + 1; // +1 because months are 0-based
        return leaveMonth === monthIndex;
      });
    }
  }
}
