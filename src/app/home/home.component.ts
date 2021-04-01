// /<reference types="chrome"/>
import { Component, OnInit } from '@angular/core';
import { Service } from '../interfaces/service';
import * as integrations_json from 'data/integrations.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  integrations: Service[] = JSON.parse(JSON.stringify(integrations_json))
  constructor() { 
    console.log(this.integrations)
  }


  ngOnInit() {
}

}