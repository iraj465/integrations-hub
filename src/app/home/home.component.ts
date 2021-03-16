// /<reference types="chrome"/>
import { Component, OnInit } from '@angular/core';
import { BatteryManager } from '../interfaces/battery-manager';
// import {chrome} from '@types/chrome';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  public request_data() {
    // The ID of the extension we want to talk to.
    var laserExtensionId = "jgehapfghmkbnbljjbcjfgepkkmihoib";
    // Make a simple request
      chrome.runtime.sendMessage(laserExtensionId, {getBatteryData: true, getCpuData: false, getMemoryData: false},
      function(response) {
        console.log('Response is ',response)
        // if (targetInRange(response.targetData))
        //   chrome.runtime.sendMessage(laserExtensionId, {activateLasers: true});
      }
      );
  }

  ngOnInit() {
    setInterval(() => {
      this.request_data
    }, 3000);
  }
}
