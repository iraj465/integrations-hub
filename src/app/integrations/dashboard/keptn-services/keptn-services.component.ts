import { Component, OnInit } from '@angular/core';
import { Integration } from 'src/app/interfaces/service';
import { IntegrationsJsonService } from 'src/app/services/integrations-json.service';

@Component({
  selector: 'app-keptn-services',
  templateUrl: './keptn-services.component.html',
  styleUrls: ['./keptn-services.component.css']
})
export class KeptnServicesComponent implements OnInit {
  integrations: Integration[] = [];
  constructor(
    private jsonService: IntegrationsJsonService
  ) { }

  ngOnInit() {
    this.integrations = this.jsonService.get_integrations_json().filter(integration => integration.type == "keptn-service");
  }

}
