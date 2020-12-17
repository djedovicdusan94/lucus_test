import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { ConfirmService } from './confirm-dialog/confirm.service';
import { LightboxModule } from 'ngx-lightbox';


@NgModule({
  declarations: [NavigationComponent, ConfirmDialogComponent, SearchBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationComponent,
    ConfirmDialogComponent,
    LightboxModule,
    SearchBarComponent
  ],
  // A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency.
  providers: [ConfirmService]
})
export class SharedModule {}
