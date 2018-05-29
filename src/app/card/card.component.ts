import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  inputs: ['cardData']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
