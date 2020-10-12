import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  segment: String;
  //@ViewChild(IonSegment) segment: IonSegment;
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
  idDetatail: string;
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(private route: ActivatedRoute) {
    this.idDetatail=route.snapshot.paramMap.get("id");
    console.log(this.idDetatail)
    console.log(this.data)
  }

  ngOnInit() {
    this.segment = "creditos";
  }

  segmentChanged(event){
    let valor = event.detail.value;
    console.log(valor)
  }

  slideChanged () {
    let arraySegment = ["creditos","depositos"]
    let index = this.slides.getActiveIndex().then( promise =>{
      console.log ("El índice actual es " + promise);
      this.segment = arraySegment[promise]
    });
  }
}
