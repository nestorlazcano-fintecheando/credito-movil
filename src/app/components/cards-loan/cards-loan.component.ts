import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards-loan',
  templateUrl: './cards-loan.component.html',
  styleUrls: ['./cards-loan.component.scss'],
})
export class CardsLoanComponent implements OnInit {

  @Input() data: any;
  
  sliderConfig = {
    slidesPerView: 1.3,
    spaceBetween: 3,
    centeredSlides: true
  };
  
  constructor() { }

  ngOnInit() {
   
  }

}
