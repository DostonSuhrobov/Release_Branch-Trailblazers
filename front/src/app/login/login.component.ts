import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { BackendApiService } from '../services/backend-api.service'

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

  get username() {
    return this.myLoginForm.get('username');
  }

  constructor(private fb: FormBuilder, private _auth: BackendApiService, private route: Router) {}

  ngOnInit(): void {
    this.myLoginForm = this.fb.group({
      password: ['' ],
      email: [''],
      username: ['']
    });
  }

  loginInfo(f : FormGroup){
    this._auth.logIn( f.value.email, f.value.password )
    .subscribe(
      res => this.route.navigate(['/home']),
      err => {
        alert('Incorret email or password, please check again')
        f.reset()
      },
      () => console.log()
    )


  }


}
