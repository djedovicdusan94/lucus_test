import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityHomeComponent } from './identity-home/identity-home.component';
import { LoginComponent } from './identity-home/login/login.component';

@NgModule({
  declarations: [IdentityHomeComponent, LoginComponent],
  imports: [CommonModule, IdentityRoutingModule, SharedModule],
})
export class IdentityModule {}
