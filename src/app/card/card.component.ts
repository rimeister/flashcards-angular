import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  inputs: ['cardData','index'] 
  /* Because I used inputs here inside the 
  @component, I don't have to use @input inside the class definition */
})
export class CardComponent implements OnInit {

	cardData:object = this.cardData;	
	index:number = this.index;	
	cardStyle:object;


	constructor() {
		this.cardStyle = {'margin-top':'0px'}
	}

	ngOnInit() {
		console.log(this.index+'px');
		this.cardStyle['margin-top'] = this.index+'px';
	}

}
