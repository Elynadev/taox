import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',

  standalone: false,



})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthserviceService) {
    this.createUserForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createUserForm.valid) {
      const { username, email, password, firstName, lastName } = this.createUserForm.value;

      this.authService.createUser(username, email, password, firstName, lastName).subscribe(
        response=> {
          console.log('User created successfully:', response);
        },
        erroror => {
          console.error('User creation failed:', error);
        }
      );
    }
  }
}
