import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  links = [
    { href: '/integrations/dashboard/services', name: "Services" },
    { href: '/integrations/dashboard/sli', name: "SLI-providers" }
  ];
  activeLink = this.links[0];
  constructor() { }

  ngOnInit(): void {
  }

}
