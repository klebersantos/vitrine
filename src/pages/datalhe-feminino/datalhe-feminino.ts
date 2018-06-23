import { ApiFemininoProvider } from './../../providers/api-feminino/api-feminino';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-datalhe-feminino',
  templateUrl: 'datalhe-feminino.html',
})
export class DatalheFemininoPage {

  public post: any = [];
  public isLoading:boolean = false;
  public relatedItems:any = [];
  public length: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiFemininoProvider
  ) {
    this.post = navParams.get('post');
  }
  ionViewDidLoad() {
    this.getRelated();
  }

  getRelated(){
    if(!this.isLoading){
      this.isLoading = true;
      this.api.get('feminino?_embed&categoria_feminino='+this.post.categoria_feminino[0])
      .subscribe((data:any) => {
        this.isLoading = false;
        this.relatedItems = data;
        this.length;
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  openDetail(item){
    this.navCtrl.push(DatalheFemininoPage, {post: item});
  }
}
