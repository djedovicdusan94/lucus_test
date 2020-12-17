import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2HomeComponent } from './page2-home/page2-home.component';

const routes: Routes = [{ path: '', component: Page2HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2RoutingModule {}
