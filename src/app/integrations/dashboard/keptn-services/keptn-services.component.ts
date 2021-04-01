import { Component, OnInit } from '@angular/core';
import * as integrations_json from 'data/integrations.json'
import { Service } from 'src/app/interfaces/service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-keptn-services',
  templateUrl: './keptn-services.component.html',
  styleUrls: ['./keptn-services.component.css']
})
export class KeptnServicesComponent implements OnInit {
  integrations: Service[] = (integrations_json  as  any).default as Service[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.integrations[0])

  }

}
