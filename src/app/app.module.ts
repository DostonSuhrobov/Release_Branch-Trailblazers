import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoversComponent } from './covers/covers.component';
import { LiveSportsComponent } from './live-sports/live-sports.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavBarComponent } from './register/nav-bar/nav-bar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieItemComponent } from './movieslist/movieItem/movie-item/movie-item.component';
import { YouTubePlayerModule } from '@angular/youtube-player';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoversComponent,
    LiveSportsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    MovieCardComponent,
    NavbarComponent,
    MovieslistComponent,
    MovieItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
