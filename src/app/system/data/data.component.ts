import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  links = [
    { href: '/system/data/cpu', name: "CPU" },
    { href: '/system/data/memory', name: "Memory" }
  ];
  activeLink = this.links[0];
  constructor() { }

  ngOnInit(): void {
  }

}
