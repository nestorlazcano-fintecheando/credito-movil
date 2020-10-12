import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardsButtonsComponent } from './cards-buttons.component';




@NgModule({
  declarations: [
    CardsButtonsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CardsButtonsComponent
  ]
})
export class CardsButtonsModule { }
