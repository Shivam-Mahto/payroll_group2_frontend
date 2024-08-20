import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileData = {
    name : "dummy",
    dob : "15/5/2002",
    email : "dummy@dumb.com",
    phone : "911"
  };

  constructor(private profileService : ProfileService) {}

  ngOnInit() {
    this.fetchProfileData("152");
  }

  fetchProfileData(id : String){
    this.profileService.getProfileData(id).subscribe(
      (res) => {
        console.log(res);
        this.profileData = res[0];  //@ SHIVAM TODO I ASSUMED [0]
      },
      (err) => {
        console.log();
      }
    )
  }

}
