import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Quote}from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote =new Quote(0,"","","", new Date());
  @Output()addQuote= new EventEmitter<Quote>();
  submitQUote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
