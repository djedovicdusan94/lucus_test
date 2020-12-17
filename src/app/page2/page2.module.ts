import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Page2RoutingModule } from './page2-routing.module';
import { Page2HomeComponent } from './page2-home/page2-home.component';

@NgModule({
  declarations: [Page2HomeComponent],
  imports: [CommonModule, Page2RoutingModule, SharedModule],
})
export class Page2Module {}
