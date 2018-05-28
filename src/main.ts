import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/*

	** Architecture of this app **

	Components:
	-- Game
	-- Info div
	---- Shuffle btn
	-- Discard zone div 
	---- Deck
	------ Card

*/