import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Service } from 'src/app/interfaces/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnChanges {

  @Input()
  service!: Service;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.service = changes.service.currentValue;   // fetch the current value
}

}
