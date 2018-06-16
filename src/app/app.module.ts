import { DatalheFemininoPage } from './../pages/datalhe-feminino/datalhe-feminino';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MasculinoPage } from '../pages/masculino/masculino';
import { FemininoPage } from '../pages/feminino/feminino';
import { BuscaPage } from '../pages/busca/busca';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { MasculinoListaPage } from '../pages/masculino-lista/masculino-lista';
import { FemininoListaPage } from '../pages/feminino-lista/feminino-lista';
import { BuscaFemininoPage } from './../pages/busca-feminino/busca-feminino';
import { ApiProvider } from '../providers/api/api';
import { ApiFemininoProvider } from '../providers/api-feminino/api-feminino';
import { ApiHomeProvider } from '../providers/api-home/api-home';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MasculinoPage,
    FemininoPage,
    BuscaPage,
    DetalhePage,
    MasculinoListaPage,
    FemininoListaPage,
    DatalheFemininoPage,
    BuscaFemininoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      platforms: {
        ios: {
          backButtonText: ''
        }
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MasculinoPage,
    FemininoPage, 
    BuscaPage,
    DetalhePage,
    MasculinoListaPage,
    FemininoListaPage,
    DatalheFemininoPage,
    BuscaFemininoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ApiFemininoProvider,
    ApiHomeProvider
  ]
})
export class AppModule {}
