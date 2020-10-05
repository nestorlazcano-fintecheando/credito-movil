import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  segment: String;
  //@ViewChild(IonSegment) segment: IonSegment;
  @ViewChild(IonSlides) slides: IonSlides;
  constructor() { }

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
