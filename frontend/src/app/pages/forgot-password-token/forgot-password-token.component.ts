import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-forgot-password-token',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password-token.component.html',
  styleUrl: './forgot-password-token.component.css'
})
export class ForgotPasswordTokenComponent {



  signInForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    conformPassword: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  token: any;

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.token = paramMap.get('token');
    });
    console.log(this.token);
  }

  print() {
    // console.log(this.signInForm.value);
    this.resetPassword();
  }

  resetPassword() {
    this.authService.resetPasswordWithToken({ ...this.signInForm.value, username: localStorage.getItem('username'), token: this.token }).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    })
  }
}
