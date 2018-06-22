import { HomePage } from './../pages/home/home';
import { InternaPage } from './../pages/interna/interna';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, App } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { ApiHomeProvider } from '../providers/api-home/api-home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  
  data: any = [];
  public items: any = [];
  private isLoading:boolean = false;

  constructor(
    public app: App,
    public api: ApiHomeProvider, 
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      this.getPosts();

    });
  }


  getPosts(){
    if(!this.isLoading){
      this.isLoading = true;
    
      this.api.get('pages')
      .subscribe((data:any) => {
        this.isLoading = false;
        
        this.items = data;
        // this.items = this.items.concat(data);
       
        console.log(this.items);
        console.log(this.isLoading);
      }, (error) => {
        this.isLoading = false;
      });
      
    }
  }

  openPage(item){
    console.log(item);
    // this.nav.push(item.component);
    
    this.nav.push(InternaPage, {post: item});
  }


}
