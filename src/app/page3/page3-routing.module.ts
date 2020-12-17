import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3HomeComponent } from './page3-home/page3-home.component';

const routes: Routes = [{ path: '', component: Page3HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3RoutingModule {}
