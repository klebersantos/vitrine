import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { BuscaPage } from '../busca/busca';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-masculino-lista',
  templateUrl: 'masculino-lista.html',
})
export class MasculinoListaPage {

  data: any = [];
  public items: any = [];
  private per_page:number = 8;
  private page:number = 1;
  private isLoading:boolean = false;
  public showLoadMore = false;
  private category_id:number = 0;

  constructor(public navCtrl: NavController, public api: ApiProvider, public navParms: NavParams) {
    if(this.navParms.get('cat_id')!=null && this.navParms.get('cat_id') != undefined) {
      this.category_id = this.navParms.get('cat_id');
    }
    this.getPosts();
  }
  

  getPosts(ionRefresh = null){
    if(!this.isLoading){
      this.isLoading = true;
      if(ionRefresh!=null && ionRefresh) {
        this.page =1;
      }
      this.api.get('masculino?_embed&per_page='+this.per_page +'&page='+this.page + (this.category_id!=0 ? '&categoria_masculino='+this.category_id: ''))
      .subscribe((data:any) => {
        this.isLoading = false;
        this.items = ionRefresh!=null && ionRefresh ? data : this.items.concat(data);
        // this.items = this.items.concat(data);
        if(data.length===this.per_page) {
          this.page++;
          this.showLoadMore = true;
        }else{
          this.showLoadMore = false;
        }
        if(ionRefresh!=null) {
          ionRefresh.complete();
        }

      }, (error) => {
        this.isLoading = false;
        if(error.error.code==="rest_post_invalid_page_number"){
          this.showLoadMore = false;
        }
        if(ionRefresh!=null){
          ionRefresh.complete();
        }
      });

      
      
    }
  }


  openDetail(item){
    this.navCtrl.push(DetalhePage, {post: item});
  }

  openSearchPage(){
    this.navCtrl.push(BuscaPage);
  }


}
