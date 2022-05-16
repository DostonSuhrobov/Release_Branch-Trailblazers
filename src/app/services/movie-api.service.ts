import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=d89a01f68d806160a716281e3336d0a7&query=';

  private movieList: any = [];
  private mlsbj = new Subject();
  movielist = this.mlsbj.asObservable();

  constructor( private http: HttpClient ) { }

  searchMovies(keyword: string){
    this.http
    .get([this.baseURL, keyword].join(''))
    .pipe(
      map((movieobj: any) => {
        const arr = movieobj.results.map((obj: any) => {
          return { 
            moviename: obj.original_title,
            id: obj.id
          };
        });
        return arr;
      }),
      tap((movielist) => {
        this.movieList = [...movielist];
        this.mlsbj.next(this.movieList);
      })
    )
    .subscribe();
  }

}