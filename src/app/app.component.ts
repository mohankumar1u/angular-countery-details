import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { AppService } from "./app.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AppService]
})
// @Pipe({
//     name: 'filter'
// })
//@Injectable()
export class AppComponent {
  name = "Angular";
  cards: any;
  title = "Angular Search Using ng2-search-filter";
  region=[];
  selectedBrand="all";
  searchText;
  darkmode="darkmode-off";
  constructor(private AppService: AppService) {}
  ngOnInit() {
    this.getCardDetails1();
  }
  valueSelected(){
    console.log(this.selectedBrand);
  }
  darkmodeChange(){
    if(this.darkmode==="darkmode-off"){
      this.darkmode = "darkmode-on"
      console.log("darkmode");
    }
    else{
       this.darkmode = "darkmode-off"
    }
  }
  getCardDetails1 = () => {
    this.AppService.getCardDetails().subscribe(element => {
      this.cards = element;
      let obj =[];
      for (let [key, value] of Object.entries(this.cards))
       {
          obj.push(value.region);
        // Object.assign(this.region , {key: value.region});
      }
      this.region = obj.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
this.region[6]="all"
         console.log(this.region)

    });
  };
}
