import { Component } from '@angular/core';
import { ApiHomeProvider } from '../../providers/api-home/api-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  data: any = [];
  public items: any = [];
  private isLoading:boolean = false;

  constructor(public api: ApiHomeProvider) {
    
    this.getPosts();

  }

  // getPosts(){
    
  //   this.api.get('pages/23')
  //   .subscribe(data => {
      
  //     this.items = this.items.concat(data);
  //     this.items;
  //     console.log(data);
  //   })
 
  // }

  getPosts(){
    if(!this.isLoading){
      this.isLoading = true;
    
      this.api.get('pages/23')
      .subscribe((data:any) => {
        this.isLoading = false;
        
        this.items = this.items.concat(data);
        // this.items = this.items.concat(data);
       
        console.log(this.isLoading);
      }, (error) => {
        this.isLoading = false;
      });
      
    }
  }

}
