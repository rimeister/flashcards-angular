import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',

})

export class DeckComponent implements OnInit {

	// This is how you update thing after the constructor; value is initialized in constructor, updated here.
	cards: object; // Defining data types gives you better error control
	i: number;

	// Private variable of type HTTPClient
	constructor( private http: HttpClient ) {
		// "Components become more powerful when they allow you to work with data (e.g., data below)"
		// Directives allow you to manipulate the data in order to display it within your template
		this.i = 0; // Create iterator var, to keep count of number of cards created in this deck.
	}

	ngOnInit(): void { // Void, so of no type request -- get, post, etc.

		this.http.get<Object>('../assets/json/flashcard_QA.json').subscribe(
			data => {
				this.cards = data;
		}) // Specify the type of 
		
	}

/*
	positionCards(): void {
		// console.log(this.cards);
	}
*/

}