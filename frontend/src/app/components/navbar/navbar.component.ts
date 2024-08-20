import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountantDashboardItems, adminDashboardItems, dashboardList } from '../../utils/dashboardList';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  empDetails = {
    empId: "",
    role: "admin"
  };

  dashboardItems: any;

  constructor() {
    // Assign dashboardItems based on the role

    this.empDetails.empId = localStorage.getItem('userId') || "";
    this.empDetails.role = localStorage.getItem('role') || "";

    if (this.empDetails.role === "employee") {
      this.dashboardItems = dashboardList;
    } else if (this.empDetails.role === "admin") {
      this.dashboardItems = adminDashboardItems;
    } else if (this.empDetails.role === "accountant") {
      this.dashboardItems = accountantDashboardItems;
    } else {
      console.error("Invalid role");
    }
  }
}