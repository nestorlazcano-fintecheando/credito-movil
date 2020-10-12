import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Storage } from '@ionic/storage';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dashboard: Observable<any>;
  public prestamos: any[] = [];
  @Output() public dashboardData = new EventEmitter<any>();

  public urlAvatar = '';

  sliderConfig = {
    slidesPerView: 5,
    spaceBetween: 2,
    centeredSlides: true
  };

  public iconexpand = 'chevron-down-outline';
  expanded: boolean = false;
  key: string = 'dashboard';

  constructor(private storage: Storage, private menuCtrl: MenuController, private dashboardService: DashboardService) {}

  ngOnInit(){
    this.dashboardService.dashboard().subscribe(data =>{
      this.storage.set(this.key, JSON.stringify(data));
     // this.storage.set('dashboard', this.dashboard);
    });

    //this.dashboard = this.dashboardService.dashboard();
    
    this.urlAvatar = '/assets/img/avatar/stan-lee.jpg';
  }

  onExpanded(){
    if(this.expanded){
      this.expanded=false;
      this.iconexpand = 'chevron-down-outline';
    } else {
      this.expanded=true;
      this.iconexpand = 'chevron-up-outline';
    }
    
  }

  menuSalir(){
    this.menuCtrl.open('first');
  }

}
