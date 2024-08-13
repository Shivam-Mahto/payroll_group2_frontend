import { Component } from '@angular/core';
import { dashboardList } from '../../utils/dashboardList';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { EmployeeSidebarComponent } from "../../components/employee-dashboard-components/employee-sidebar/employee-sidebar.component";

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, RouterLink, RouterLinkActive, NavbarComponent, FooterComponent, EmployeeSidebarComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {

  list = dashboardList;
  id = 1;

}
