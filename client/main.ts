import { AppComponent as AppMobileComponent } from './app.mobile.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ionicBootstrap } from 'ionic-angular';
import { METEOR_PROVIDERS } from 'angular2-meteor';
import { Meteor } from 'meteor/meteor';

import ionicSelector from 'ionic-selector';

import '../both/methods/parties.methods';
import {AppModule} from './app.module';

import 'angular2-meteor-accounts-ui/build/login-buttons.scss';
import 'ng2-material/core.scss';

if (Meteor.isCordova) {
  document.addEventListener('deviceready', () => {
    ionicSelector('app');
    runMobile();
    setClass('mobile');
  });
} else {
  runWeb();
  setClass('web');
}


function runWeb() {
    platformBrowserDynamic().bootstrapModule(AppModule)
        .catch((err: any) => console.error(err));
}

function runMobile() {
  ionicBootstrap(AppMobileComponent, [
    METEOR_PROVIDERS
  ]);
}

function setClass(css) {
  if (!document.body.className) {
    document.body.className = "";
  }
  document.body.className += " " + css;
}
