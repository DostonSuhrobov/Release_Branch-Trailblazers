import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myLoginForm!: FormGroup;

  get email() {
    return this.myLoginForm.get('email');
  }

  get password() {
    return this.myLoginForm.get('password');
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myLoginForm = this.fb.group({
      password: ['', Validators.required, Validators.minLength(6)],
      email: ['', Validators.required, Validators.email],
    });
  }
}
