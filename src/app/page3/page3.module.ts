import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Page3RoutingModule } from './page3-routing.module';
import { Page3HomeComponent } from './page3-home/page3-home.component';

@NgModule({
  declarations: [Page3HomeComponent],
  imports: [CommonModule, Page3RoutingModule, SharedModule],
})
export class Page3Module {}
