import { Injectable } from '@angular/core';
import * as integrations_json from 'data/integrations.json'
import { Integration } from '../interfaces/service';

@Injectable({
  providedIn: 'root'
})
export class IntegrationsJsonService {
  integrations: Integration[] = (integrations_json  as  any).default as Integration[];
  constructor() { }

  public get_integrations_json() {
    return this.integrations
  }
}
