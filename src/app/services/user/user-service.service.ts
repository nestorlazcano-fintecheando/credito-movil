import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '@models/users/register';
import { Login } from '@models/users/login';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpOptions: any;
  key: any;
  url = "https://jmaldama-proxy.herokuapp.com/https://jmaldama-credito-movilapi.herokuapp.com/usuarios/";
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

  public register(form1,form2): Observable<any> {
    let r= new Register();
    r.setName = form1.name;
    r.setApellidoPaterno = form1.apellidoP;
    r.setApellidoMaterno = form1.apellidoM;
    r.setAccountNo = form1.nClient;
    r.setEmail = form1.email;
    r.setSelfie = form2.img;
    r.setCurp = form2.curp;
    r.setDateBirth = form2.dateBirth;
    r.setPhone = form2.phone;
    r.setPassword = form1.password;
    return this.http.post(this.url,r, this.httpOptions);
  }

  public login(form): Observable<any> {
    let l= new Login();

    l.setPassword = form.password;
    l.setAccountNo = form.nClient;
    return this.http.post(this.url+"login",l);
  }

  public sendImg(imageData): Observable<any> {
    let params = {
        "selfi":imageData
    }
    return this.http.post(this.url+"yo/selfi",params,this.httpOptions);
  }

  public sendCode(number): Observable<any>{
    let params = {
      "numeroMovil":number
    }
    this.key = JSON.parse(localStorage.getItem('user')).token;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+JSON.parse(localStorage.getItem('user')).token
      })
    };
    return this.http.post(this.url+"enviarcodigo/",params,this.httpOptions);
  }

  public verificationCode(code,number): Observable<any>{
    this.key = JSON.parse(localStorage.getItem('user')).token;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+JSON.parse(localStorage.getItem('user')).token
      })
    };
    return this.http.post(this.url+code+"/verificar/"+number,{},this.httpOptions);
  }
}
