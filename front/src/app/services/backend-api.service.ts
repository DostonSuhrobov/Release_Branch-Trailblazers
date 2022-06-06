import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import { Subject } from 'rxjs';


interface Structure {
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
private tmdbKey = 'd89a01f68d806160a716281e3336d0a7';
private signupUrl = "http://localhost:4231/auth/signup";
private loginUrl = "http://localhost:4231/auth/signin";
private checkEmailUrl = "http://localhost:4231/auth/check-email";
private updateuserUrl = "http://localhost:4231/auth/userupdate";
private token = '';
private users  = [];
private usersbj$ = new Subject();
user$ = this.usersbj$.asObservable()


  constructor(private http: HttpClient) { }


  get Token(){
    return this.token;
  }

  signUp(email: string, password:string, username:string){
    return this.http.post<Structure>(this.signupUrl, {
      'email': email,
      'password': password,
      'username': username,
      'tmdb_key': this.tmdbKey,
      'role': 'USER'
    })
  }

  logIn(email: string, password:string){
    return this.http.post<Structure>(this.loginUrl, {
      'email': email,
      'password': password,
    }).pipe(
      map((res:any) => {
        this.token = res.accessToken;
        const decodeUser = jwt_decode(this.token)
        const currentuser = JSON.stringify(decodeUser);
        localStorage.setItem('currentUser', currentuser)
        this.users = [...this.users, decodeUser]
        this.usersbj$.next(this.users)
        console.log(this.token)
      })

    )
  }

  signOut(){

    localStorage.removeItem('currentUser')
    this.users = [];
    this.usersbj$.next(this.users)
    this.token = '';

  }


  checkEmail(email: string){
    return this.http.post<Structure>(this.checkEmailUrl, {
      'email': email
    })
  }


  updateUser(email: string, username:string, key: string, role:string){

    return this.http.patch<Structure>(this.updateuserUrl, {

      'email': email,
      'username': username,
      'tmdb_key': key,
      'role': role
    })
  }



}
