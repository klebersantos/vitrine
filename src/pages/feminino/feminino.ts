import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FemininoListaPage } from '../feminino-lista/feminino-lista';
import { ApiFemininoProvider } from '../../providers/api-feminino/api-feminino';



@IonicPage()
@Component({
  selector: 'page-feminino',
  templateUrl: 'feminino.html',
})
export class FemininoPage {

  constructor(public api: ApiFemininoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.api.getCategories2();
  }

  openPage(cat_id: number =0) {
    this.navCtrl.push(FemininoListaPage, {cat_id: cat_id});
  }


}
