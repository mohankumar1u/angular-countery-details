import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  card:any;
  selectedBrand:string;
  darkmode:string;
  @Input()
   set OneInput({card, selectedBrand, searchText, darkmode}) {  
      //console.log(card)
      this.card = card
      this.selectedBrand = selectedBrand
      this.darkmode = darkmode
   }
    @Output() itemSelected = new EventEmitter();

  constructor() { }

  singleItem(card){
    this.itemSelected.emit(card)
  }
  ngOnInit() {
  }

}