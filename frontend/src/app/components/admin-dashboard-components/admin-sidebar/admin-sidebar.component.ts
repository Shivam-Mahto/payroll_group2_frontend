import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {

  items = [
    { name: 'Employee List', icon: 'fas fa-calendar-day', link: 'employee-list', isActive: false },
    { name: 'Profile', icon: 'fas fa-user', link: 'profile', isActive: false },
    { name: 'Leaves', icon: 'fas fa-calendar-day', link: 'leaves', isActive: false },
    { name: 'Salary', icon: 'fas fa-dollar-sign', link: 'salary', isActive: false },
<<<<<<< HEAD
    { name: 'Leave Requests', icon: 'fas fa-dollar-sign', link: 'leave-request', isActive: false }
    
=======
    { name: 'Leave Requests', icon: 'fas fa-dollar-sign', link: '/salary', isActive: false }
>>>>>>> db5cc3148b14d042bb708f8ca789a9da96a12c0b
  ];
}
