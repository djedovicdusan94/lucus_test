import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1HomeComponent } from './page1-home/page1-home.component';
import { CrudDialogComponent } from './page1-home/crud-dialog/crud-dialog.component';

@NgModule({
  declarations: [Page1HomeComponent, CrudDialogComponent],
  imports: [
    CommonModule,
    Page1RoutingModule,
    SharedModule
  ]
})
export class Page1Module { }
