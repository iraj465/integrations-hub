import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera,Clipboard, Heart, Github, ExternalLink, Cpu, Activity, Settings,ArrowRightCircle,Anchor ,Home, Layers, Box, Star, ArrowDownCircle} from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  ExternalLink,
  Cpu,
  Activity,
  Clipboard,
  Settings,
  ArrowRightCircle,
  ArrowDownCircle,
  Anchor,
  Home,
  Layers,
  Box,
  Star
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