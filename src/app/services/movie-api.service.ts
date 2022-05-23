import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private baseURL = 'https://api.themoviedb.org/3/search/movie?api_key=d89a01f68d806160a716281e3336d0a7&query=';

 // For movies in genaral

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
            id: obj.id,
            vote: obj.vote_average
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

//   For Movie cards 

private baseUrl = "https://api.themoviedb.org/3/";
private discoverUrl = "discover/movie?api_key=e564841b67db5e6169f2878e05efea32"
private baseVideoUrl = "https://api.themoviedb.org/3/movie/";
private videoUrl ="/videos?api_key=e564841b67db5e6169f2878e05efea32&language=en-US"
private movieCards: any = [];
private mcsbj$ = new Subject();
moviecards$ = this.mcsbj$.asObservable();


  getMovieCards(){
    this.http.get([this.baseUrl,this.discoverUrl].join('')).pipe(
      map((data: any) => {
        const arr = data.results.map((obj: any) => {
          return {
            moviename: obj.original_title,
            id: obj.id,
            imgUrl: obj.poster_path
          };
        });
        return arr;
      }),
      tap((movielist: any) => {
        this.movieCards = [...movielist]
        this.mcsbj$.next(this.movieCards)
      })
    ).subscribe()
  }


    getVideoKey(movieKey: any){
      return this.http.get([this.baseVideoUrl, movieKey,this.videoUrl].join(''))
    }







}