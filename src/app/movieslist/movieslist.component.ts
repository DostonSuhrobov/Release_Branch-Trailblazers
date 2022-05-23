import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import  { MovieCardsService } from '../services/moviecardsservice/movieCards.service'
import { MovieApiService } from 'src/app/services/movie-api.service'

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {

  moviesCard$: any;
  baseImageUrl = 'http://image.tmdb.org/t/p/w185'


  constructor(private movieCardService: MovieApiService, private route: Router) { }

  ngOnInit():void {

      this.movieCardService.getMovieCards()
      this.moviesCard$ = this.movieCardService.moviecards$

  }

  onSelect(card: any){
    this.route.navigate(['/movies', card.id])
  }


}
