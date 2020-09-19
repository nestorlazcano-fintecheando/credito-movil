import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserServiceService } from '@services/user/user-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hide = true;
  form_login: FormGroup;
  constructor(
    private form: FormBuilder, 
    private userService: UserServiceService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.formLogin();
  }
  formLogin(){
    this.form_login = this.form.group({
      nClient: ['', [
        Validators.required,
        Validators.pattern("^[0-9]{9}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}")
      ]]
    });
  }

  login(){
    this.userService.login(this.form_login.value).subscribe(response => {
      this.presentAlert("Datos correctos!","Validacion exitosa.");
    },error=>{
      this.presentAlert("Error!","Su contraseña o usuario son incorrectos.");
    })
  }

  async presentAlert(header,msj) {
    const alert = await this.alertController.create({
      header: header,
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }

}
