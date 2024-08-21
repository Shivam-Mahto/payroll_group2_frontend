import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileData = {
    id: "",
    f_name: "",
    l_name: "",
    date_of_birth: "",
    email: "",
    phone: "",
    role: "",
    address: "",
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.fetchProfileData(localStorage.getItem('userId') || "");
  }

  fetchProfileData(id : String){
    this.employeeService.getEmployee(id).subscribe(
      (res) => {
        console.log(res);
        // this.profileData = res[0];  //@ SHIVAM TODO I ASSUMED [0]
        this.profileData = res;
      },
      (err) => {
        console.log();
      }
    )
  }

}
