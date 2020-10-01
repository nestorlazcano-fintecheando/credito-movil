import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent,
    ValidationErrorsComponent
  ],
  exports:[
    HeaderComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
