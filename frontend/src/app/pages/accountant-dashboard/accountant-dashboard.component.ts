import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { AccountantSidebarComponent } from "../../components/accountant-dashboard-components/accountant-sidebar/accountant-sidebar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accountant-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, AccountantSidebarComponent, FooterComponent],
  templateUrl: './accountant-dashboard.component.html',
  styleUrl: './accountant-dashboard.component.css'
})
export class AccountantDashboardComponent {

}
