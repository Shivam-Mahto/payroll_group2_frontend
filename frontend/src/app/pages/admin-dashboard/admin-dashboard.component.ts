import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { EmployeeSidebarComponent } from "../../components/employee-dashboard-components/employee-sidebar/employee-sidebar.component";
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from "../../components/admin-dashboard-components/admin-sidebar/admin-sidebar.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, EmployeeSidebarComponent, RouterModule, AdminSidebarComponent , FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
