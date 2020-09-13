import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { UserServiceService } from '@services/user/user-service.service';
import { AlertController } from '@ionic/angular';

//import * as faceapi from 'face-api.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  confPassword = document.getElementById('confPassword');
  image: String;
  hide = true;
  step1 = true;
  step2 = false;
  aceptarTerminos = false;
  form_register1: FormGroup;
  form_register2: FormGroup;

  ctx: CanvasRenderingContext2D;
  img = new Image();

  constructor(
    private form: FormBuilder,
    private camera: Camera,
    private userService: UserServiceService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.formRegister();
    //this.detect();
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
      this.router.navigate(['/login']);
    },error =>{
      this.presentAlert("Algo ocurrio mal.");
    })
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
      this.image = 'data:image/jpeg;base64,' + imageData
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

  async detect(uri) {

    /*await faceapi.loadSsdMobilenetv1Model('../../../assets/weights')
    await faceapi.loadFaceRecognitionModel('../../../assets/weights')
    await faceapi.loadFaceLandmarkModel('../../../assets/weights')
    //await faceapi.nets.faceLandmark68Net.loadFromDisk('../../../assets/weights')
    //this.ctx.drawImage(imageObj.nativeElement, width, height);
    const img = await faceapi.fetchImage(uri)
    let fullFaceDescriptions = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors()

    //fullFaceDescriptions = faceapi.resizeResults(fullFaceDescriptions,)
    console.log(fullFaceDescriptions)
    //faceapi.draw.drawDetections(canvas, fullFaceDescriptions)

    //console.log('done 3')
    const img = await canvas.loadImage('../../../assets/img/cara.jpg')
    //const results = await faceapi.detectAllFaces(img, faceDetectionOptions).withFaceLandmarks()

    const out = faceapi.createCanvasFromMedia(img) as any
    faceapi.draw.drawDetections(out, results.map(res => res.detection))
    faceapi.draw.drawFaceLandmarks(out, results.map(res => res.landmarks))
  
    saveFile('faceLandmarkDetection.jpg', out.toBuffer('image/jpeg'))
    console.log('done, saved results to out/faceLandmarkDetection.jpg')*/
  }

  async presentAlert(msj) {
    const alert = await this.alertController.create({
      header: 'Error!',
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
