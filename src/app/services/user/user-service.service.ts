import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpOptions: any;
  key: any;
  url = "https://jmaldama-proxy.herokuapp.com/https://jmaldama-credito-movilapi.herokuapp.com/usuarios/";

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50Tm9Db2RlZCI6IjAwMDAwMDAwNCIsImlhdCI6MTYwMDEzODY3MX0.2Xd7WyhqQ5hGwkAmVOrdP_ZDT4RWGaIVlBiiiIj4la8"
      })
    };
  }
  public register(form1,form2): Observable<any> {
    let params = {
      account_no: form1.nClient,
      apellido_materno: form1.apellidoP,
      apellido_paterno: form1.apellidoM ,
      nombre: form1.name,
      selfi:form2.img,
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

  public sendImg(imageData): Observable<any> {
    let params = {
        "selfi":imageData
    }
    return this.http.post(this.url+"yo/selfi",params,this.httpOptions);
  }
}
