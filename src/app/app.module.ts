import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { SystemModule } from './system/system.module';
import { BatteryComponent } from './components/battery/battery.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { IconsModule } from './icons/icons.module';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BatteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule,
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    IconsModule,
    ChartsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
