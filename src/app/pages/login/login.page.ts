import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { UserServiceService } from '@services/user/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  hide = true;
  form_login: FormGroup;
  constructor(private form: FormBuilder, private userService: UserServiceService) { }

  ngOnInit() {
    this.formLogin();
  }
  formLogin(){
    this.form_login = this.form.group({
      nClient: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  login(){
    this.userService.login(this.form_login.value).subscribe(response => {
      console.log(response)
    })
  }
}
