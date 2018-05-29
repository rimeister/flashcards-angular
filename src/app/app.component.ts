import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	// This is how you update thing after the constructor; value is initialized in constructor, updated here.
	cards: object; // Defining data types gives you better error control

	// Private variable of type HTTPClient
	constructor( private http: HttpClient ) {
		// "Components become more powerful when they allow you to work with data (e.g., data below)"
		// Directives allow you to manipulate the data in order to display it within your template
	}

	ngOnInit(): void { // Void, so of no type request -- get, post, etc.
		// So: The component that uses the data needs to import it, and import the HttpClient module at the top of the file to do the request.
		// i.e., it can't go on app.component.ts. This data can be passed into child elements via props, though. 
		this.http.get<Object>('../assets/json/flashcard_QA.json').subscribe(
			data => {
				this.cards = data;
		}) // Specify the type of 
	}

}