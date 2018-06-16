import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiHomeProvider } from '../../providers/api-home/api-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  data: any = [];
  public items: any = [];
  constructor(public navCtrl: NavController, public api: ApiHomeProvider) {
    
    this.getPosts();

  }

  getPosts(){
    
    this.api.get('pages/23')
    .subscribe(data => {
      
      this.items = this.items.concat(data);
      this.items;
      console.log(data);
    })
 
  }

 

}
