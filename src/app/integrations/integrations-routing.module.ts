import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeptnServicesComponent } from './dashboard/keptn-services/keptn-services.component';
import { SliProvidersComponent } from './dashboard/sli-providers/sli-providers.component';
import { IntegrationsComponent } from './integrations.component';
const routes: Routes = [
  {
    path:'',
    component: IntegrationsComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'services',
            component: KeptnServicesComponent
          },
          {
            path: 'sli',
            component: SliProvidersComponent
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationsRoutingModule { }
