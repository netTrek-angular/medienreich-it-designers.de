import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  console.log ('this is a production build')
  enableProdMode();
} else {
  console.log ('this is a dev build')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
