import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  // {
  //   component: HeaderComponent,
  //   path: 'header'
  // },
  {
    component: RegisterComponent,
    path: 'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
