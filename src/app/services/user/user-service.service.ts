import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpOptions: any;
  key: any;
  url = "https://jmaldama-proxy.herokuapp.com/https://e83a14e38515.ngrok.io/usuarios/";

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Request-With': ""
      })
    };
  }
  public register(form1,form2): Observable<any> {
    let params = {
      account_no: form1.nClient,
      apellido_materno: form1.apellidoP,
      apellido_paterno: form1.apellidoM ,
      nombre: form1.name,
      clave_ine:"",
      serie_ine:"",
      curp:form2.curp,
      fecha_nacimiento:form2.dateBirth,
      email: form1.email,
      password: form1.password,
      numero_movil: form2.phone
    }
    console.log(params)
    return this.http.post(this.url,params, this.httpOptions);
  }

  public login(form): Observable<any> {
    let params = {
        "account_no":form.nClient,
        "password":form.password
    }
    console.log(params)
    return this.http.post(this.url+"login",params);
  }
}
