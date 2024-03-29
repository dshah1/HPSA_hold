import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//https://stackoverflow.com/questions/60221545/add-formcontrol-accroding-to-the-data-returned-from-backend-but-got-two-differen/60222524#60222524



(function () {
  function getChromeVersion() {
  const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

  return raw ? parseInt(raw[2], 10) : false;
     }

  const chromeVersion = getChromeVersion();
  if (chromeVersion && chromeVersion >= 80) {
       Array.prototype.reduce = function (callback /*, initialValue*/) {
  'use strict';
  if (this == null) {
  throw new TypeError('Array.prototype.reduce called on null or undefined');
         }
  if (typeof callback !== 'function') {
  throw new TypeError(callback + ' is not a function');
         }
  let t = Object(this), len = t.length >>> 0, k = 0, value;
  if (arguments.length === 2) {
           value = arguments[1];
         } else {
  while (k < len && !(k in t)) {
             k++;
           }
  if (k >= len) {
  throw new TypeError('Reduce of empty array with no initial value');
           }
           value = t[k++];
         }
  for (; k < len; k++) {
  if (k in t) {
             value = callback(value, t[k], k, t);
           }
         }
  return value;
       };
     }
   })();
