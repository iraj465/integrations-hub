import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { DataComponent } from './data/data.component';
import { DiagnosticsManagerComponent } from './diagnostics-manager/diagnostics-manager.component';
import { StateComponent } from './state/state.component';
import { MaterialModule } from '../material-module';
import { CpuComponent } from './data/cpu/cpu.component';
import { MemoryComponent } from './data/memory/memory.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [DataComponent, DiagnosticsManagerComponent, StateComponent, CpuComponent, MemoryComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MaterialModule,
    ChartsModule 
  ],
  exports: [
    CpuComponent,
    MemoryComponent
  ]
})
export class SystemModule { }
