import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1HomeComponent } from './page1-home/page1-home.component';

const routes: Routes = [{ path: '', component: Page1HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule {}
