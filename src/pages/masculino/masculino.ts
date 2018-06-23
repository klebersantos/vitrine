import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MasculinoListaPage } from '../masculino-lista/masculino-lista';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-masculino',
  templateUrl: 'masculino.html',
})


export class MasculinoPage {
  
  get: any;
  public Categories: any = [];
  private isLoading:boolean = false;
  data: any = [];
  
  constructor(public api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    
    this.getCategories();
    this.api.getCategories();

  }

  // getCategories() {
  //   this.api.get('categoria_masculino').subscribe((data) => {
  //     this.Categories = data;
  //     console.log(this.Categories);
  //   });
  // }

  getCategories() {
    if(!this.isLoading){
      this.isLoading = true;

      this.api.get('categoria_masculino').subscribe((data: any) => {
        this.isLoading = false;
        this.Categories = data;
        
      },(error) => {
        this.isLoading = false;
      });
    }
  }


  // abriPage(item) {
  //   this.navCtrl.push(MasculinoListaPage);
  // }

  openPage(cat_id: number =0) {
    this.navCtrl.push(MasculinoListaPage, {cat_id: cat_id});
  }


}
