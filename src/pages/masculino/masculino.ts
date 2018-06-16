import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { MasculinoListaPage } from '../masculino-lista/masculino-lista';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-masculino',
  templateUrl: 'masculino.html',
})


export class MasculinoPage {
  

  constructor(public api: ApiProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.api.getCategories();
  }


  // abriPage(item) {
  //   this.navCtrl.push(MasculinoListaPage);
  // }

  openPage(cat_id: number =0) {
    this.navCtrl.push(MasculinoListaPage, {cat_id: cat_id});
  }


}
