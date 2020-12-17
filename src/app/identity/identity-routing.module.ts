import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentityHomeComponent } from './identity-home/identity-home.component';

const routes: Routes = [
  {
    path: '',
    component: IdentityHomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityRoutingModule {}
