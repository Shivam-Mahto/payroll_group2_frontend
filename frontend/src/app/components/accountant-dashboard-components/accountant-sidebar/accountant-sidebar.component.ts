import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accountant-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accountant-sidebar.component.html',
  styleUrl: './accountant-sidebar.component.css'
})
export class AccountantSidebarComponent {

  items = [
    { name: 'Generate Payslip', icon: 'fa-solid fa-wallet', link: 'generate-payslip', isActive: false },
    { name: 'Profile', icon: 'fas fa-user', link: 'profile', isActive: false },
    { name: 'Salary', icon: 'fas fa-dollar-sign', link: 'salary', isActive: false },
    { name: 'Leaves', icon: 'fas fa-calendar-day', link: 'leaves', isActive: false },
  ];

}
