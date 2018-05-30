import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  inputs: ['cardData','index','style.left.px'] 
  /* Because I used inputs here inside the 
  @component, I don't have to use @input inside the class definition */
})
export class CardComponent implements OnInit {

	cardData:object = this.cardData;	
	index:number = this.index;	


	constructor() { }

	ngOnInit() {

	}

}
