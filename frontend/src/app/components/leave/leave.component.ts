import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css'
})
export class LeaveComponent {

  leavesData = 
    {
      leavesTaken : 123,
      leavesLeft : 23,
      pendingRequests : 1
    }

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
      startDate: "03/02/2024",
      endDate: "02/02/2024",
      employeeId: 2,
      type: 'sick',
      status: "pending"
    },
    {
      name: "Shivam",
      startDate: "02/02/2024",
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
    console.log(month);
    this.selectedMonth = month;
    this.filterLeaves();
  }

  //TODO Filter uses mmddyyyy and not ddmmyyyy
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
