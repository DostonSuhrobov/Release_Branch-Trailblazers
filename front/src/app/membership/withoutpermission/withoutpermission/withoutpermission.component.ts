import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withoutpermission',
  templateUrl: './withoutpermission.component.html',
  styleUrls: ['./withoutpermission.component.css']
})
export class WithoutpermissionComponent implements OnInit {

lockIcon = '&#128274;'

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  upgradeMembership(){
    this.route.navigate(['/register/membership'])
  }

  backToHome(){
    this.route.navigate(['/home'])
  }

}
