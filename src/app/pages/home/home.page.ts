import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public card = [
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    }
  ];

  public urlAvatar = '';

  public iconexpand = 'chevron-down-outline';
  expanded: boolean = false;
  public classlist = 'position-card1';
  fecha = Date();

  public data = [
    {
      icon: '',
      name: '',
      redirectTo: '',
      img: '/assets/img/cards/Tarjeta01_1.svg',
      accountNo: '000000012589',
      amount: 1468.00,
      pago:0,
      datepago: this.fecha
    },
    {
      icon: '',
      name: '',
      redirectTo: '',
      img: '/assets/img/cards/Tarjeta02.svg',
      accountNo: '0000000123456',
      amount: 4500,
      pago:50,
      datepago: this.fecha
    },
    {
      icon: '',
      name: '',
      redirectTo: '',
      img: '/assets/img/cards/Tarjeta01_1.svg',
      accountNo: '000000058965',
      amount:3000,
      pago:100,
      datepago: this.fecha
    }
  ];
  

  constructor(private menuCtrl: MenuController) {}

  ngOnInit(){

    this.urlAvatar = '/assets/img/avatar/stan-lee.jpg';
  }

  onExpanded(){
    if(this.expanded){
      this.expanded=false;
      this.iconexpand = 'chevron-down-outline';
    } else {
      this.expanded=true;
      this.iconexpand = 'chevron-up-outline';
    }
    
  }

  menuSalir(){
    this.menuCtrl.open('first');
  }

}
