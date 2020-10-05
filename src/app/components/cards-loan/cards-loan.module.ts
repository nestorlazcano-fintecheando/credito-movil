import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsLoanComponent } from './cards-loan.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CardsLoanComponent
  ],
  exports:[
    CardsLoanComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CardsLoanModule { }
