import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MasculinoPage } from '../masculino/masculino';
import { FemininoPage } from '../feminino/feminino';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MasculinoPage;
  tab3Root = FemininoPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
