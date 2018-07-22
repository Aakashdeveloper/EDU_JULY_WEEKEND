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
  Component==> It contain all logical and HTMl/Css Part
  Module==>Declaration component/pipe/service/route
  Pipe==> Help to manupulate data
  Service==> To connect to 3rd party api/database
  Routes==> To manage the pages
  */
