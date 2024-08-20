import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  
  message = "";
  signInForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
  })

  constructor(private authService: AuthService, private router: Router) {}

  print() {
    // console.log(this.signInForm.value);
    this.sendEmail();
  }

  sendEmail() {
    this.authService.forgotPasswordEmail(this.signInForm.value).subscribe((res) => {
      console.log(res);
      localStorage.setItem('username', this.signInForm.value.username || "");
      this.message = res.response;
    }, (err) => {
      console.log(err);
    })
  }
}
