import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signInForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl(''),
  })

  constructor(private authService: AuthService, private router: Router) {}

  print() {
    // console.log(this.signInForm.value);
    this.login();
  }

  login() {
    this.authService.login(this.signInForm.value).subscribe((res) => {

      console.log(res);
      
      localStorage.setItem('token', res.jwt);
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('username', this.signInForm.value.username || "");
      localStorage.setItem('role', res.role);

      if(res.firstLogin) {
        this.router.navigate(['/reset-password']);
      } else {

        if(res.role == "admin") {
          this.router.navigate(['/admin/dashboard']);
        } else if(res.role == "accountant") {
          this.router.navigate(['/accountant/dashboard'])
        } else {
          this.router.navigate(['/employee/dashboard'])
        }

      }

    }, (err) => {
      console.log(err);
    })
  }
}
