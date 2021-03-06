import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieslistResolver } from './movielist-resolve.services';
import { PageNotFoundComponent } from './shared/pagenotfound/pagenotfound';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movieslist/movieslist.module').then(m => m.MovieslistModule), //resolve: {movieca: MovieslistResolver}
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LogintModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '', redirectTo:"home", pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
