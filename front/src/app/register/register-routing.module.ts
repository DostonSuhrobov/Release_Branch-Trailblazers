import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembershipComponent } from '../membership/membership.component';
import { StandardComponent } from '../membership/standard/standard.component';
import { WithoutpermissionComponent } from '../membership/withoutpermission/withoutpermission/withoutpermission.component';
import { RegisterComponent } from './register.component';




const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'withoutpermission',
    component: WithoutpermissionComponent
  },
  {
    path: 'standardmembership',
    component: StandardComponent
  },
  {
    path: 'premiummembership',
    component: StandardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}