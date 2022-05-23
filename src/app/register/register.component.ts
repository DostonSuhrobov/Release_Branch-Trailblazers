import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;

  get password() {
    return this.myForm.get('password')
  }
  get name() {
    return this.myForm.get('name')
  }

  get email() {
    return this.myForm.get('email')
  }

  get gender() {
    return this.myForm.get('gender')
  }

constructor(private formbulider: FormBuilder) {

}

ngOnInit(): void {
  this.myForm = this.formbulider.group({
    password: ['', Validators.required, Validators.minLength(6)],
    name: ['',Validators.required],
    email: ['', Validators.required, Validators.email],
    gender: ['', Validators.required]
  })
}

onSubmit() {

}

}
