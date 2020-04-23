import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponentModule } from './hello.component';
import { CardsComponent } from '../cards/cards.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';;
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports:      [ BrowserModule, FormsModule, HelloComponentModule, HttpClientModule,  Ng2SearchPipeModule ],
  declarations: [ AppComponent, CardsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }