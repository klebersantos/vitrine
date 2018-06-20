import { DetalhePage } from './../detalhe/detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  searchQuery:string = '';
  public items: any = [];
  private per_page:number = 100;
  private page:number = 1;
  public showLoadMore = false;
  private isLoading = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
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
      this.api.get('masculino?_embed&per_page='+this.per_page +'&page='+this.page+'&search='+this.searchQuery)
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
    this.navCtrl.push(DetalhePage, {post: item});
  }

}
