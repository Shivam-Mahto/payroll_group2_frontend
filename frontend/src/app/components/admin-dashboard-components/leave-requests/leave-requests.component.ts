import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  searchTerm: string = "";
  filteredLeaveRequests = this.leaveRequests;

  searchLeaveRequests() {
    
    // console.log("called searchLeaveRequest: ", text);

    if (this.searchTerm == "")
      this.filteredLeaveRequests = this.leaveRequests;
    else {
      this.filteredLeaveRequests = this.leaveRequests.filter(request =>
        request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
