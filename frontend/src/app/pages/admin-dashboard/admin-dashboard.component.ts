import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LoginComponent } from '../../components/login/login.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdminSidemenuComponent } from '../../components/admin-sidemenu/admin-sidemenu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent , LoginComponent , FooterComponent , AdminSidemenuComponent, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
