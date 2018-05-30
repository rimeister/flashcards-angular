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


	constructor() { }

	ngOnInit() {
		console.log(this.index);
		this.updatePosition();
	}

	public updatePosition() {
		return {
			'left': '100px'
		}
	}

}
