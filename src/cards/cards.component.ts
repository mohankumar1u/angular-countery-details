import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  card:any;
  selectedBrand:string;
  @Input()
   set OneInput({card, selectedBrand, searchText}) {  
      //console.log(card)
      this.card = card
      this.selectedBrand = selectedBrand
   }

  constructor() { }

  ngOnInit() {
  }

}