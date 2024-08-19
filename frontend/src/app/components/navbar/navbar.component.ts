import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminDashboardItems } from '../../utils/dashboardList';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { 
  dashboardItems = adminDashboardItems;
  empDetails = {
    name : "Jane Doe",
    role : "employee"
  }
}
