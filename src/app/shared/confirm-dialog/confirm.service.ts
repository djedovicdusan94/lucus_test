import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable()
export class ConfirmService {
  private dialogRef: MatDialogRef<ConfirmDialogComponent>;

  constructor(private dialog: MatDialog) {}

  // Starts from here
  // Gets called from page1-home.component.ts
  public confirm(title: string, message: string): Observable<boolean> {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();
  }
}
