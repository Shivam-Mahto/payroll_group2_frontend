import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  signInForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    conformPassword: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService, private router: Router) { }

  print() {
    // console.log(this.signInForm.value);
    this.resetPassword();
  }

  resetPassword() {
    this.authService.resetPassword({ ...this.signInForm.value, username: localStorage.getItem('username') }).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    })
  }
}
