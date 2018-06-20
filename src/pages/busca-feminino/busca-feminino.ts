import { ApiFemininoProvider } from './../../providers/api-feminino/api-feminino';
import { DatalheFemininoPage } from './../datalhe-feminino/datalhe-feminino';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-busca-feminino',
  templateUrl: 'busca-feminino.html',
})
export class BuscaFemininoPage {

  searchQuery:string = '';
  public items: any = [];
  private per_page:number = 100;
  private page:number = 1;
  public showLoadMore = false;
  private isLoading = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiFemininoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onSearch(){
    this.items = [];
    this.getPosts();
  }

  getPosts(){
    if(!this.isLoading && this.searchQuery.length > 0){
      this.isLoading = true;
      this.api.get('feminino?_embed&per_page='+this.per_page +'&page='+this.page+'&search='+this.searchQuery)
      .subscribe((data:any) => {
        this.isLoading = false;
        this.items = this.items.concat(data);
        if(data.length===this.per_page) {
          this.page++;
          this.showLoadMore = true;
        }else{
          this.showLoadMore = false;
        }
      }, (error) => {
        this.isLoading = false;
        if(error.error.code==="rest_post_invalid_page_number"){
          this.showLoadMore = false;
        }
      });
    }
  }
  clearSearch(){
    this.searchQuery = '';
    this.items = [];
    this.page = 1;
    this.showLoadMore = false;
  }

  openDetail(item){
    this.navCtrl.push(DatalheFemininoPage, {post: item});
  }

}
