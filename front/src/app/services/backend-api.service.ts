import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

private baseUrl = "http://localhost:4231/auth/signup";
  constructor(private http: HttpClient) { }


  signUp(){
    return this.http.post<any>(this.baseUrl, {
      email: '',
      password: '',
      username: '',
      tmdb_key: '',
      role: 'USER'
    })
  }

}
