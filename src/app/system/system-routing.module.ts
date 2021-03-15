import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DiagnosticsManagerComponent } from './diagnostics-manager/diagnostics-manager.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
  {
    path:'data',
    component: DataComponent
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
