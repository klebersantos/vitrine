import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasculinoListaPage } from './masculino-lista';

@NgModule({
  declarations: [
    MasculinoListaPage,
  ],
  imports: [
    IonicPageModule.forChild(MasculinoListaPage),
  ],
})
export class MasculinoListaPageModule {}
