import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { UserServiceService } from '@services/user/user-service.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

declare var faceapi;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  confPassword = document.getElementById('confPassword');
  image: String;
  isFace = true;
  hide = true;
  step1 = true;
  step2 = false;
  mensajeSelfi ="Tómate una selfie";
  aceptarTerminos = false;
  form_register1: FormGroup;
  form_register2: FormGroup;
  minConfidence: number = 0.9;
  img = new Image();
  showBtnSelfi = 1;
  constructor(
    private form: FormBuilder,
    private camera: Camera,
    private userService: UserServiceService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.formRegister();
    this.loadModels();
  }

  formRegister(){
    this.form_register1 = this.form.group({
      name: ['', [Validators.required]],
      apellidoP: ['', [Validators.required]],
      apellidoM: [''],
      email: ['', [
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]],
      nClient: ['', [
        Validators.required,
        Validators.pattern("^[0-9]{9}$")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}")
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
      curp: ['', [
        Validators.required,
        Validators.maxLength(18),
        Validators.minLength(18)
      ]],
      dateBirth: ['', [Validators.required]],
      img: ['']
    })
  }

  createCount(){
    this.userService.register(this.form_register1.value,this.form_register2.value).subscribe(response => {
      console.log(response)
      this.presentAlert("Datos correctos!","Usuario creado correctamente.")
      this.router.navigate(['/login']);
    },err =>{
      console.log(err)
      this.presentAlert('Error!',err.error);
    })
  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 350,
      targetHeight: 350,
      correctOrientation: true,
      cameraDirection: this.camera.Direction.FRONT
    }
    this.camera.getPicture(options).then((imageData) => {
      this.form_register2.get("img").setValue(imageData);
      this.image = 'data:image/jpeg;base64,' + imageData      
      setTimeout(() => this.detect(), 200);
    }, (err) => {
      this.presentAlert('Ups!',"No se pudo cargar la foto.");
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

  async detect() {
    const urlImg = document.getElementById('img-photo');
    const options = this.getFaceDetectorOptions();
    let fullFaceDescriptions = await faceapi.detectAllFaces(urlImg,options);
    console.log("AQUI2: ",fullFaceDescriptions);

    //Ver si es cara con un 90%
    if(fullFaceDescriptions.length==1){
      this.mensajeSelfi = "Foto valida!";
      this.showBtnSelfi=2;
      this.isFace=true;
      this.presentAlert('Foto valida!',"Es una cara.");
    }else{
      this.form_register2.get("img").setValue("");
      this.showBtnSelfi=3;
      this.isFace=false;
      this.mensajeSelfi = "Foto invalida: Solo debe aparecer su cara."
      this.presentAlert('Error!',"No es una cara o hay más de una.");
    }
  }

  async loadModels() {
    const deviceMemory = (navigator as any).deviceMemory;
    if (deviceMemory && deviceMemory >= 1) {
      await faceapi.nets.ssdMobilenetv1.load(await faceapi.fetchNetWeights('../../../assets/face-api/ssd_mobilenetv1.weights'));
    }  
  }

  getFaceDetectorOptions() {
    return new faceapi.SsdMobilenetv1Options({ minConfidence: this.minConfidence })
  }

  async presentAlert(header,msj) {
    const alert = await this.alertController.create({
      header: header,
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
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
