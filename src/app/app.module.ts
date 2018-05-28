import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { InfoComponent } from './info/info.component';
import { ShuffleBtnComponent } from './shuffle-btn/shuffle-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    InfoComponent,
    ShuffleBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
