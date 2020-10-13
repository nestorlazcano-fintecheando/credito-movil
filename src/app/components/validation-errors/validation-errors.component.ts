import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent implements OnInit {
  @Input() form:FormGroup;
  @Input() fieldName; //opcional solo por si se requiere mensaje expecifico.

  constructor() {
  }

  ngOnInit() {}
}
