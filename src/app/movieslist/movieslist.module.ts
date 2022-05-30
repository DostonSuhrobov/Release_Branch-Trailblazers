
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { InfiniteScrollModule } from "ngx-infinite-scroll";


import { MovieItemComponent } from "./movieItem/movie-item/movie-item.component";
import { MovieslistRoutingModule } from "./movieslist-routing.module";
import { MovieslistComponent } from "./movieslist.component";



@NgModule({
  declarations: [
    MovieslistComponent,
    MovieItemComponent
  ],
  imports: [
    MovieslistRoutingModule,
    YouTubePlayerModule,
    CommonModule,
    InfiniteScrollModule
  ],
})
export class MovieslistModule {}
