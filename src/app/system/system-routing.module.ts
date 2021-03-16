import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpuComponent } from './data/cpu/cpu.component';
import { DataComponent } from './data/data.component';
import { MemoryComponent } from './data/memory/memory.component';
import { DiagnosticsManagerComponent } from './diagnostics-manager/diagnostics-manager.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  {
    path:'data',
    component: DataComponent,
    children: [
      {
        path:'cpu',
        component: CpuComponent
      },
      {
        path:'memory',
        component: MemoryComponent
      },
    ]
  },
  {
    path:'diagnostics',
    component: DiagnosticsManagerComponent
  },
  {
    path:'state',
    component: StateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
