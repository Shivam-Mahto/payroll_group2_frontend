import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './admin-sidemenu.component.html',
  styleUrl: './admin-sidemenu.component.css'
})
export class AdminSidemenuComponent {

  items = [
    { name: 'Employee List', icon: 'fas fa-users', link: '/employee-list', isActive: false},
    { name: 'Leaves', icon: 'fas fa-calendar-day', link: '/leaves', isActive: false },
    { name: 'Salary', icon: 'fas fa-dollar-sign', link: '/salary', isActive:false },
    { name: 'Profile', icon: 'fas fa-user', link: '/profile', isActive: false}
  ];
  
  // Inject Router to handle navigation
  constructor(private router: Router) {}

  // Method to handle item click
  onItemClick(index: number, link: string): void {
    // Toggle active state
    this.items = this.items.map((item, i) => ({
      ...item,
      isActive: i === index
    }));

    // Navigate to the selected route
    this.router.navigate([link]);
  }

  // Method to handle arrow click
  navigateToPage(link: string): void {
    // Navigate to the route associated with the item
    this.router.navigate([link]);
  }
}