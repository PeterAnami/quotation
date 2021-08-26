import { Component, OnInit } from '@angular/core';
import{Quote}from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,"carol",'Only I can change my life. No one can do it for me',"Burnet", new Date (2021,8,24)),
    new Quote(1,"Sam",'Dont watch the clock do what it does. Keep going.',"Levenson" ,new Date (2021,8,24)),
    new Quote(1,"Walt",'If you can dream it, you can do it',"Disny",new Date (2021,8,24)),
    new Quote(1,"Elianor",'With the new day comes new strength and new thoughts',"Rosevelt", new Date(2021,8,24)),

  ];
  toggleDetails(index:number){
    this.quotes[index].showAuthorName=!this.quotes[index].showAuthorName;

  }
  deletQuote(isComplete:boolean,index:number){
    if(isComplete){
      let toDelete= confirm ('Are you sure you want to delete Quote by ${this.quotes[index].name}?')
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
