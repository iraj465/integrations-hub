import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, ExternalLink, Cpu, Activity, Settings,ArrowRightCircle,Anchor ,Home, Layers} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  ExternalLink,
  Cpu,
  Activity,
  Settings,
  ArrowRightCircle,
  Anchor,
  Home,
  Layers
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }