import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,"Maurice ",'It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it, Her book mrs Gooze','Switzer', new Date(2020,3,14)),
    new Quote(1,"William",'The fool doth think he is wise, but the wise man knows himself to be a fool.','Shakespeer', new Date(2020,3,14)),
    new Quote(1,"Mark",'Whenever you find yourself on the side of the majority, it is time to reform','Twain', new Date(2020,3,14)),
    new Quote(1,"Aristotal",'Knowing yourself is the beginning of all wisdom','The great', new Date(2020,3,14)),
   
  ];

  toggleDetails(index: number){
    this.quotes[index].showAuthorName= !this.quotes[index].showAuthorName;
  }

  deleteQuote(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this Quote by ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote (quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.submitDate = new Date(quote.submitDate)
    this.quotes.push(quote)
  }

  // completeQuote(isComplete: any, index: number){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
