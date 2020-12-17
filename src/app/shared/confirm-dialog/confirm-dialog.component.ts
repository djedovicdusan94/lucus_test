import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  public title: string;
  public message: string;
  
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

}
