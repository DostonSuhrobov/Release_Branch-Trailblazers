import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface SignUp {
  email: string;
  password: string;
  username: string;
  tmdb_key: string;
  role: string
}



@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

private baseUrl = "http://localhost:4231/auth/signup";
private tmdbKey = 'd89a01f68d806160a716281e3336d0a7';
private role = 'USER';
  constructor(private http: HttpClient) { }


  signUp(email: string, password:string, username:string){
    return this.http.post<SignUp>(this.baseUrl, {
      'email': email,
      'password': password,
      'username': username,
      'tmdb_key': this.tmdbKey,
      'role': this.role
    })
  }

}
