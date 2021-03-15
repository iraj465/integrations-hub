import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { DataComponent } from './data/data.component';
import { DiagnosticsManagerComponent } from './diagnostics-manager/diagnostics-manager.component';
import { StateComponent } from './state/state.component';


@NgModule({
  declarations: [DataComponent, DiagnosticsManagerComponent, StateComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
