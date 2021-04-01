import { Injectable } from '@angular/core';
import * as integrations_json from 'data/integrations.json'
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class IntegrationsJsonService {
  integrations: Service[] = (integrations_json  as  any).default as Service[];
  constructor() { }

  public get_integrations_json() {
    return this.integrations
  }
}
