import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/service';
import { IntegrationsJsonService } from 'src/app/services/integrations-json.service';

@Component({
  selector: 'app-sli-providers',
  templateUrl: './sli-providers.component.html',
  styleUrls: ['./sli-providers.component.css']
})
export class SliProvidersComponent implements OnInit {
  integrations: Service[] = [];
  constructor(
    private jsonService: IntegrationsJsonService
  ) { }

  ngOnInit(): void {
    this.integrations = this.jsonService.get_integrations_json().filter(integration => integration.type == "sli");
  }

}
