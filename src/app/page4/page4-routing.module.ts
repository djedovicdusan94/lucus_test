import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page4HomeComponent } from './page4-home/page4-home.component';

const routes: Routes = [{ path: '', component: Page4HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page4RoutingModule {}
