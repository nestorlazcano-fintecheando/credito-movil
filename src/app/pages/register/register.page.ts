import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  confPassword = document.getElementById('confPassword');
  hide = true;
  step1 = true;
  step2 = false;
  aceptarTerminos = false;
  form_register1: FormGroup;
  form_register2: FormGroup;

  constructor(private form: FormBuilder,private camera: Camera) { }

  ngOnInit() {
    this.formRegister();
  }

  formRegister(){
    this.form_register1 = this.form.group({
      name: ['', [Validators.required]],
      apellidoP: ['', [Validators.required]],
      apellidoM: [''],
      email: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ]],
      nClient: ['', [
        Validators.required,
        Validators.pattern("^[0-9]{9}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,16}$")
      ]],
      password2: ['', [
        Validators.required
      ]]
    }, {validator: this.checkPasswords});
    this.form_register2 = this.form.group({
      phone: ['', [
        Validators.required,
        Validators.pattern("^[0-9]{10}$")
      ]],
      curp: ['', [Validators.required]],
      dateBirth: ['', [Validators.required]],
      img: ['', [Validators.required]]
    })
  }

  createCount(){
    console.log(this.form_register1.value)
    console.log(this.form_register2.value)
  }

  tomarFoto(){
    console.log(this.form_register2.get("img"))
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.form_register2.get("img").setValue('data:image/jpeg;base64,' + imageData);
      console.log(this.form_register2.get("img"))
    }, (err) => {
     // Handle error
    });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('password2').value;
    if(pass === confirmPass){
      return group.get('password2').setErrors(null)
    }else{
      return group.get('password2').setErrors({notEquivalent: true})
    }    
  }

  get name(){
    return this.form_register1.get('name')
  }
  get apellidoP(){
    return this.form_register1.get('apellidoP')
  }
  get apellidoM(){
    return this.form_register1.get('apellidoM')
  }
  get email(){
    return this.form_register1.get('email')
  }
  get nClient(){
    return this.form_register1.get('nClient')
  }
  get password(){
    return this.form_register1.get('password')
  }
  get password2(){
    return this.form_register1.get('password2')
  }
  get phone(){
    return this.form_register2.get('phone')
  }
  get curp(){
    return this.form_register2.get('curp')
  }
}
