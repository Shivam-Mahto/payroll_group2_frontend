import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeavesService } from '../../../services/leaves.service';


@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './leave-requests.component.html',
  styleUrl: './leave-requests.component.css'
})
export class LeaveRequestsComponent {

  leaveRequests: any[] = []
  filteredLeaveRequests;

  constructor(private leaveService: LeavesService) {
    this.filteredLeaveRequests = this.leaveRequests;
  }

  ngOnInit() {
    this.fetchAllLeaveRequests();
  }

  searchTerm: string = "";

  searchLeaveRequests() {

    // console.log("called searchLeaveRequest: ", text);

    if (this.searchTerm == "")
      this.filteredLeaveRequests = this.leaveRequests;
    else {
      this.filteredLeaveRequests = this.leaveRequests.filter(request =>
        String(request.employeeId).startsWith(this.searchTerm)
      );
    }
  }

  fetchAllLeaveRequests() {
    this.leaveService.getAllPendingRequests().subscribe((res) => {
      console.log(res);
      this.leaveRequests = res;
      this.filteredLeaveRequests = res;
    }, (err) => {
      console.log(err);
    })
  }

  acceptRequest(id: String) {
    console.log("Clicked")
    this.leaveService.accept(id).subscribe((res) => {
      console.log(res);
      this.fetchAllLeaveRequests();
    }, (err) => {
      console.log(err);
    })
  }

  rejectRequest(id: String) {
    this.leaveService.reject(id).subscribe((res) => {
      console.log(res);
      this.fetchAllLeaveRequests();
    }, (err) => {
      console.log(err);
    })
  }
}
