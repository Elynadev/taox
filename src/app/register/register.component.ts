import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { response } from 'express';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] ,// Ajoutez si nécessaire
  standalone: false,
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;

      this.authService.register(username, email, password).subscribe(
        Response => {
          console.log('Registration successful:', response);
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
