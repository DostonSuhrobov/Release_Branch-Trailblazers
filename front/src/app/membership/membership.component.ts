import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {


  checkedSign = '&#10003;';
  currentClass = 'basic';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSelect(e){
    this.currentClass = e.target.id;
  }


 next(){
    if(this.currentClass === 'basic'){
      this.route.navigate(['/register/withoutpermission'])
    }
    if(this.currentClass === 'standard'){
      this.route.navigate(['/register/standardmembership'])
    }
    if(this.currentClass === 'premium'){
      this.route.navigate(['/register/premiummembership'])
    }
 }

}
