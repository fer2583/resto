import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})

export class userService {
  token:any

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any): Observable<any> {
    return this.http.post("http://challenge-react.alkemy.org", user);
  }

  setToken(token: string) {
    return localStorage.setItem("token", token)
  }

  getToken() {
    return this.token = localStorage.getItem("token")

  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['login']);
  }


}
