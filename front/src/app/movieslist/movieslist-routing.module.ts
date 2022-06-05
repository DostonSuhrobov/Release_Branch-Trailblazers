import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MovieslistComponent } from './movieslist.component';
import { MovieItemComponent } from './movieItem/movie-item/movie-item.component';
import { AuthGuard } from '../authGuard/auth.guard';
import { RoleGuard } from '../authGuard/role.guard';

const routes: Routes = [
  {
    path: '',
    component: MovieslistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':movieId',
    component: MovieItemComponent,
    canActivate: [RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieslistRoutingModule {}