import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';
import { createPasswordValidator } from '../shared/validators/passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;

  congratIcon = '&#127881;'

  modalClass = '';

constructor(private formbulider: FormBuilder, private backendApiService: BackendApiService, private route: Router) {}


get password() {
  return this.myForm.get('password')
}
get username() {
  return this.myForm.get('username')
}

get email() {
  return this.myForm.get('email')
}


ngOnInit(): void {
  this.myForm = this.formbulider.group({
    password: ['', [Validators.required, Validators.minLength(6), createPasswordValidator()]],
    username: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  })



}

onSubmit(f: FormGroup) {

      const email = f.value.email;
      const password = f.value.password;
      const username = f.value.username

      this.backendApiService.checkEmail(email).subscribe((data: any) => {
        if(data === true){
          alert('Email has been used, please check again')
        } else {
          this.backendApiService.signUp(email,password,username).subscribe();
          this.modalClass = 'show'
        }
      })

      this.myForm.reset();
}

switchToLogin(){
  this.route.navigate(['/login'])
}

}
