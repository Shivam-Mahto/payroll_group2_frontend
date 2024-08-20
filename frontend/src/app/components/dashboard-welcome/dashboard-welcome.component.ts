import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard-welcome.component.html',
  styleUrl: './dashboard-welcome.component.css'
})
export class DashboardWelcomeComponent {
  empDetails = {
    name: "Shivam",
    role: "accountant"
  }
}
