import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { BatteryManager } from 'src/app/interfaces/battery-manager';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  public batteryIsCharging:boolean = false;
  systemPercentage:number = 0;
  @ViewChild('level') level: ElementRef | undefined;
  @ViewChild('battery') battery: ElementRef | undefined;
  @ViewChild('icon') icon: ElementRef | undefined;


  private nav: any = window.navigator;


  ngOnInit(): void { 
    setInterval(() => {
      this.getBatteryData();
    }, 3000);   
  }

  public getBatteryData() {
    document.documentElement.style.setProperty('--background-color','#fff');
    var el = document.getElementById("icon");
    // var el2 = 
    document.body.style.setProperty('--background-color', "#27ae60");
    if(typeof el!== 'undefined' && el !== null){
      el.style.setProperty('--display-charging', this.batteryIsCharging ? "initial":"none");
    }

    this.nav.getBattery().then((battery:BatteryManager) => {
      this.systemPercentage = battery.level*100;
      if (battery.level < .25) {

      }
      this.batteryIsCharging = battery.charging;  
    });
  }

}
