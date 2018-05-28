import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import HttpClientModule, so we can get data from JSON file
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';
import { ShuffleBtnComponent } from './shuffle-btn/shuffle-btn.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { AddCardsPipe } from './add-cards.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    InfoComponent,
    ShuffleBtnComponent,
    DeckComponent,
    CardComponent,
    AddCardsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
