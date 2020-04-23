import { Component,OnInit,Pipe, PipeTransform } from '@angular/core';
import {AppService} from './app.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers:[AppService]
})
// @Pipe({
//     name: 'filter'
// })
//@Injectable()

export class AppComponent  {
  name = 'Angular';
  cards:any;
   title = 'Angular Search Using ng2-search-filter';
  searchText;
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
