import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-item-page',
  templateUrl: './single-item-page.component.html',
  styleUrls: ['./single-item-page.component.css']
})
export class SingleItemPageComponent implements OnInit {
  selectedCard:any;
  darkmode:string;
  @Input()
   set OneInput({selectedCard, darkmode}) {  
      //console.log(card)
      this.selectedCard = selectedCard
      this.darkmode = darkmode
   }
    @Output() itemSelected = new EventEmitter();

  constructor() { }
   backToList(){
     console.log("back button clicked")
    let value ={};
    this.itemSelected.emit(value);
  }

  ngOnInit() {
    console.log(this.selectedCard)
  }

}