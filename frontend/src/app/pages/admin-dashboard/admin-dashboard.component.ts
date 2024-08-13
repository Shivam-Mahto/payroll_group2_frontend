import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { EmployeeSidebarComponent } from "../../components/employee-dashboard-components/employee-sidebar/employee-sidebar.component";
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from "../../components/admin-dashboard-components/admin-sidebar/admin-sidebar.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, EmployeeSidebarComponent, RouterModule, AdminSidebarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
