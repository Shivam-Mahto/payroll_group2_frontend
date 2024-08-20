import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-employee-sidebar',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, FooterComponent],
  templateUrl: './employee-sidebar.component.html',
  styleUrl: './employee-sidebar.component.css'
})
export class EmployeeSidebarComponent {


  items = [
    { name: 'Leaves', icon: 'fas fa-calendar-day', link: 'leaves', isActive: false },
    { name: 'Salary', icon: 'fas fa-dollar-sign', link: 'salary', isActive: false },
    { name: 'Profile', icon: 'fas fa-user', link: 'profile', isActive: false }
  ];

  constructor() { }
}
