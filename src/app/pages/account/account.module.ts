import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';
import { ComponentsModule } from '@components/components.module';
import { AccountPage } from './account.page';
import { CardsLoanModule } from '@components/cards-loan/cards-loan.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    ComponentsModule,
    CardsLoanModule,
    TranslateModule
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
