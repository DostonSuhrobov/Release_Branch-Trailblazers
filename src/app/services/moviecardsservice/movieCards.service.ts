import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Subject} from 'rxjs';
import  { map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieCardsService {

private baseUrl = "https://api.themoviedb.org/3/";
private discoverUrl = "discover/movie?api_key=e564841b67db5e6169f2878e05efea32"
private baseVideoUrl = "https://api.themoviedb.org/3/movie/";
private videoUrl ="/videos?api_key=e564841b67db5e6169f2878e05efea32&language=en-US"
private movieCards: any = [];
private mcsbj$ = new Subject();
moviecards$ = this.mcsbj$.asObservable();



  constructor(private http: HttpClient) { }



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
