import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataComponent } from './data/data.component';
import { MaterialModule } from '../material-module';
import { ChartsModule } from 'ng2-charts';
import { IntegrationsRoutingModule } from './integrations-routing.module';


@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    IntegrationsRoutingModule ,   
    MaterialModule,
    ChartsModule 
  ],
  exports: [
  ]
})
export class IntegrationsModule { }
