import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module';
import { IntegrationsRoutingModule } from './integrations-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { IconsModule } from '../icons/icons.module';
import { IntegrationsComponent } from './integrations.component';
import { KeptnServicesComponent } from './dashboard/keptn-services/keptn-services.component';
import { SliProvidersComponent } from './dashboard/sli-providers/sli-providers.component';
import { ServiceCardComponent } from './shared/service-card/service-card.component';


@NgModule({
  declarations: [IntegrationsComponent,DashboardComponent,SidebarComponent, KeptnServicesComponent, SliProvidersComponent, ServiceCardComponent],
  imports: [
    CommonModule,
    IntegrationsRoutingModule ,   
    MaterialModule,
    IconsModule,
  ],
  exports: [
    DashboardComponent,
    SidebarComponent
  ]
})
export class IntegrationsModule { }
