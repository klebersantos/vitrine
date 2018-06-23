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

  public Categories: any = [];
  private isLoading:boolean = false;
  data: any = [];
  
  constructor(public api: ApiFemininoProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.getCategories2();
    this.api.getCategories2();
  }


  getCategories2() {
    if(!this.isLoading){
      this.isLoading = true;

      this.api.get('categoria_feminino').subscribe((data: any) => {
        this.isLoading = false;
        this.Categories = this.Categories.concat(data);
        
      },(error) => {
        this.isLoading = false;
      });
    }
  }

  openPage(cat_id: number =0) {
    this.navCtrl.push(FemininoListaPage, {cat_id: cat_id});
  }


}
