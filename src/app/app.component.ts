import { Component,OnInit } from '@angular/core';
import {AppService} from './app.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[AppService]
})
export class AppComponent  {
  name = 'Angular';
  cards:any;
  constructor(private AppService:AppService ){}
  ngOnInit(){
     this.getCardDetails1()
  }
  getCardDetails1 =()=>{
    this.AppService.getCardDetails().subscribe(element=>{
      this.cards=element;
      console.log(this.cards[0]);
    });
  }
}
