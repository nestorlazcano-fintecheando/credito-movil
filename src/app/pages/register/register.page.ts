import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public errorMessages = {
    nombre: [
      { type: 'required', message: 'El nombre es requerido' }
    ],
    apellidoP: [
      { type: 'required', message: 'El apellido es requerido' }
    ],
    correo: [
      { type: 'required', message: 'El correo es requerido' },
      { type: 'pattern', message: 'Ingrese un correo valido' }
    ],
    nCliente: [
      { type: 'required', message: 'No. Cliente es requedido' },
      { type: 'maxlength', message: 'No. Cliente tiene que tener 9 número' },
      { type: 'minlength', message: 'No. Cliente tiene que tener 9 número' },
      { type: 'pattern', message: 'No. Cliente solo acepta numeros' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es requerida' },
      { type: 'pattern', message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula, al menos un caracter especial y sin espacios' }
    ],
    password2: [
      { type: 'required', message: 'Confirmar contraseña es requerida' },
    ],
    zip: [
      { type: 'required', message: 'Zip code is required' },
      {
        type: 'pattern',
        message: 'Please enter a valid zip code'
      }
    ]
  };
  
  hide = true;
  step1 = true;
  step2 = false;
  aceptarTerminos = false;
  form_register1: FormGroup;
  form_register2: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.formRegister();
  }

  formRegister(){
    this.form_register1 = this.form.group({
      nombre: ['', [Validators.required,Validators.maxLength(9)]],
      apellidoP: ['', [Validators.required]],
      apellidoM: [''],
      correo: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ]],
      nCliente: ['', [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(8),
        Validators.pattern("[0-9]+")
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/")
      ]],
      password2: ['', [
        Validators.required
      ]]
    });
    this.form_register2 = this.form.group({
      celular: ['', [
        Validators.required,
        Validators.pattern("[0-9]+")
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
    console.log("Tomar foto")
  }

  get nombre(){
    return this.form_register1.get('nombre')
  }
  get apellidoP(){
    return this.form_register1.get('apellidoP')
  }
  get apellidoM(){
    return this.form_register1.get('apellidoM')
  }
  get correo(){
    return this.form_register1.get('correo')
  }
  get nCliente(){
    return this.form_register1.get('nCliente')
  }
  get password(){
    return this.form_register1.get('password')
  }
  get password2(){
    return this.form_register1.get('password2')
  }
  get celular(){
    return this.form_register2.get('celular')
  }
  get curp(){
    return this.form_register2.get('curp')
  }
}
