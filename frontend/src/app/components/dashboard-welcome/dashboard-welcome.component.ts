import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-welcome',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-welcome.component.html',
  styleUrl: './dashboard-welcome.component.css'
})
export class DashboardWelcomeComponent {
  empDetails = {
    name: "Shivam",
    role: "Accountant" //TODO Maybe? to say welcome to the Accountant dashboard?
  }
}
