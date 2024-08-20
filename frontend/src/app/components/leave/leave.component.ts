import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeavesService } from '../../services/leaves.service';

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

  // leavesList = [
  //   {
  //     name: "Shivam",
  //     startDate: "01/02/2024",
  //     endDate: "02/02/2024",
  //     employeeId: 1,
  //     type: 'sick',
  //     status: "Pending"
  //   },
  //   {
  //     name: "Shivam",
  //     startDate: "03/02/2024",
  //     endDate: "02/02/2024",
  //     employeeId: 2,
  //     type: 'sick',
  //     status: "Rejected"
  //   },
  //   {
  //     name: "Shivam",
  //     startDate: "02/03/2024",
  //     endDate: "02/03/2024",
  //     employeeId: 3,
  //     type: 'sick',
  //     status: "Approved"
  //   }
  // ]

  leavesList : any[] = [];

  constructor(private leavesService: LeavesService) { }

  ngOnInit() {
    this.fetchAllLeaves("152");
  }

  selectedMonth: string = 'All'; // Default to 'All'
  filteredLeaves: any[] = this.leavesList;

  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  onMonthChange(month: string) {
    // console.log(month);
    this.selectedMonth = month;
    this.filterLeaves();
  }

  // default javascript date has mmddyyyy format
  filterLeaves() {
    if (this.selectedMonth === 'All') {
      this.filteredLeaves = this.leavesList;
    } else { 
      const monthIndex = this.months.indexOf(this.selectedMonth) + 1;
      this.filteredLeaves = this.leavesList.filter(leave => {
        const dateParts = leave.startDate.split('/');
        const newDateParts = [dateParts[1], dateParts[0], dateParts[2]];
        const leaveMonth = new Date(newDateParts.join('/')).getMonth() + 1; // +1 because months are 0-based
        console.log(leave.startDate, leaveMonth);
        return leaveMonth === monthIndex;
      });
    }
  }

  fetchAllLeaves(id: string) {

    this.leavesService.getAllLeaves(id).subscribe((res) => {
      console.log(res);
      this.leavesList = res;
      this.filteredLeaves = res;
    }, (err) => {
      console.log(err);
    })
  }
}
