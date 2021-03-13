import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: Event | undefined;

  constructor(private _swUpdate: SwUpdate) { 
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
