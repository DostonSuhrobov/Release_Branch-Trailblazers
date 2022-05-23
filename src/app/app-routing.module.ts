import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeaderComponent } from './header/header.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieItemComponent } from './movieslist/movieItem/movie-item/movie-item.component';


const routes: Routes = [
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: MovieslistComponent,
    path: 'movies',
    children: [
      {
        path:':movieId',
        component: MovieItemComponent
      }
    ]
  },
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
