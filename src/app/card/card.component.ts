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
	cardClass:string;	
	cardStyle:object;


	constructor() {
		this.cardStyle = {'top':'0px','left':'0px'} // Add properties to cardStyle object, value 0px to start
	}

	ngOnInit() {
		this.cardStyle['top'] = this.index+'px';
		this.cardStyle['left'] = this.index+'px';
		this.cardClass = 'stacked_card';
	}

}
