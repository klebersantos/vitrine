import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiHomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiHomeProvider {

  private API_URL:string = 'http://kleberdev.com/vitrine/wp-json/wp/v2/';
  public Pages: any = [];
  
  

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  get(query:string = '') {
    return this.http.get(this.API_URL + query);
  }

  getPages() {
    this.get('pages').subscribe((data) => {
      this.Pages = data;
    });
  }
}
