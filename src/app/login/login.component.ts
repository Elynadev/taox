import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] ,// Ajoutez si nécessaire
  standalone: false,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}


  // onSubmit(): void {
  //   console.log("Login form submitted");
  // }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("Form data:", this.loginForm.value);
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful:', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login failed:', error);
        }
      );
    } else {
      console.log("Form is invalid");
    }
  }
}
