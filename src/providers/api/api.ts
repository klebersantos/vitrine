import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  
  private API_URL:string = 'http://localhost/vitrine/wp-json/wp/v2/';
  public Categories: any = [];
  

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get(query:string = '') {
    return this.http.get(this.API_URL + query);
  }

  getCategories() {
    this.get('categoria_masculino').subscribe((data) => {
      this.Categories = data;
      console.log(this.Categories);
    });
  }

  getCategories2() {
    this.get('categoria_feminino').subscribe((data) => {
      this.Categories = data;
      console.log(this.Categories);
    });
  }

  getCatName(cat_id:number) {
    let cat_name: string = '';
    this.Categories.forEach(element => {
      if(element.id==cat_id) {
        cat_name = element.name;
      }
    });
    return cat_name;
  }


}