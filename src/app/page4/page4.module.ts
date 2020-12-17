import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Page4RoutingModule } from './page4-routing.module';
import { Page4HomeComponent } from './page4-home/page4-home.component';

@NgModule({
  declarations: [Page4HomeComponent],
  imports: [CommonModule, Page4RoutingModule, SharedModule],
})
export class Page4Module {}
