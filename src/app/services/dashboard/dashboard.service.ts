import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  httpOptions: any;
  key: any;
  url = 'https://jmaldama-proxy.herokuapp.com/https://jmaldama-credito-movilapi.herokuapp.com/';
  //url = "https://jmaldama-proxy.herokuapp.com/http://e7c223ef3e18.ngrok.io/usuarios/";


  constructor(private http: HttpClient) {
    if(JSON.parse(localStorage.getItem('user'))){
      this.key = JSON.parse(localStorage.getItem('user')).token;
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.key
      })
    };
   }

   public dashboard(): Observable<any>{
    console.log(this.httpOptions);
    return this.http.get(this.url+ 'dashboard/',this.httpOptions);

   }
}
