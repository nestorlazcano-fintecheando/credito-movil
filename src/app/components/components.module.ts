import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import { CardsLoanComponent } from './cards-loan/cards-loan.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ValidationErrorsComponent,
    PaymentCardsComponent,
    SpinnerComponent
  ],
  exports:[
    HeaderComponent,
    ValidationErrorsComponent,
    PaymentCardsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
