import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.page.html',
  styleUrls: ['./movements.page.scss'],
})
export class MovementsPage implements OnInit {
  arrayMovements: any = [
    {
      "title":"CRÉDITO AUTORIZADO",
      "numero":"00000-0000000-00",
      "precio":"55,570.00",
      "fecha":"30/10/2019",
      "subtitle":""
    },
    {
      "title":"PAGO DE GARANTÍA",
      "numero":"00000-0000000-00",
      "precio":"55,570.00",
      "fecha":"12/12/2019",
      "subtitle":""
    },{
      "title":"REFERENCIA DE PAGO APLICADO",
      "numero":"00000-0000000-00",
      "precio":"2,570.00",
      "fecha":"30/10/2019",
      "subtitle":"PAGO DE GARANTÍA"
    },{
      "title":"REFERENCIA DE PAGO APLICADO",
      "numero":"00000-0000000-00",
      "precio":"2,570.00",
      "fecha":"30/10/2019",
      "subtitle":"REEMBOLSO"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
