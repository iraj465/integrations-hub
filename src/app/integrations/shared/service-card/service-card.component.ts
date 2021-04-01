import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  @Input('service') service: Service | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
