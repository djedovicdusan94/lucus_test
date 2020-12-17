import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { ConfirmService } from './confirm-dialog/confirm.service';

@NgModule({
  declarations: [NavigationComponent, ConfirmDialogComponent],
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
  ],
  // A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency.
  providers: [ConfirmService],
})
export class SharedModule {}
