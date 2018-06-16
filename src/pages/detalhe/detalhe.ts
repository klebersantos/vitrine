import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public post: any = [];
  public isLoading:boolean = false;
  public relatedItems:any = [];
  public length: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider
  ) {
    this.post = navParams.get('post');
  }
  ionViewDidLoad() {
    this.getRelated();
  }

  getRelated(){
    if(!this.isLoading){
      this.isLoading = true;
      this.api.get('masculino?_embed&categoria_masculino='+this.post.categoria_masculino[0])
      .subscribe((data:any) => {
        this.isLoading = false;
        this.relatedItems = data;
        this.length;
        console.log(data);
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  openDetail(item){
    this.navCtrl.push(DetalhePage, {post: item});
  }

}
