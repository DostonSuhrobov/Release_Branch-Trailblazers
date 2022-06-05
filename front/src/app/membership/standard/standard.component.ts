import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {


  constructor(private route: Router, private backendservice: BackendApiService) { }

  ngOnInit(): void {}



  previous(){
    this.route.navigate(['/register/membership'])
  }

  upgrade(){

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const role = "ADMIN";
    this.backendservice.updateUser(user.email, user.username, user.tmdb_key, role ).subscribe((_) => {
      this.backendservice.signOut()
      this.route.navigate(['/movies']);
    })
  }
}
