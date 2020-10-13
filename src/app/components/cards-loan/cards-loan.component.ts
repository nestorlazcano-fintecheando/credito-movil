import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-loan',
  templateUrl: './cards-loan.component.html',
  styleUrls: ['./cards-loan.component.scss'],
})
export class CardsLoanComponent implements OnInit, AfterViewInit {

  @Input() id: number;

  @ViewChild(IonSlides) slides: IonSlides;
  public dashboard:any;
  public prestamos: any[];

  public img = {one: '/assets/img/cards/Tarjeta1.svg', two: '/assets/img/cards/Tarjeta2.svg'};

  sliderConfig = {
    slidesPerView: 1.2,
    spaceBetween: .3,
    centeredSlides: true
  };
 
  public key: string = 'index-card';
  
  constructor(private storage: Storage,  private router: Router) { }

  ngOnInit() {
    this.storage.get('dashboard').then((val) => {
    this.prestamos = JSON.parse(val).prestamos;
      });
   }


  onAccounts(id: number){
  
    this.router.navigate(['/account/', id]);
  }

  ngAfterViewInit(){
    this.slides.slideTo(this.id);
  }


}
