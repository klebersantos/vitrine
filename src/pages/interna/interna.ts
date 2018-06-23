import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-interna',
  templateUrl: 'interna.html',
})
export class InternaPage {

  
  url: SafeResourceUrl;
  public post: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.post = navParams.get('post');
    this.getSafeUrl(this.url);
  }

  getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com.br/maps/place/R.+%C3%89rico+Mota,+56+-+Parquel%C3%A2ndia,+Fortaleza+-+CE,+60450-175/@-3.7361045,-38.5652013,17z/data=!4m13!1m7!3m6!1s0x7c749795ae97461:0x8ec15c4de14fdf05!2sR.+%C3%89rico+Mota,+56+-+Parquel%C3%A2ndia,+Fortaleza+-+CE,+60450-175!3b1!8m2!3d-3.7361099!4d-38.5630126!3m4!1s0x7c749795ae97461:0x8ec15c4de14fdf05!8m2!3d-3.7361099!4d-38.5630126");		
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaPage');
  }

}
