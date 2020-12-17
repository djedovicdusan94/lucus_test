import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Jsonplaceholder } from 'src/app/_models/jsonplaceholder.model';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html'
})
export class CrudDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CrudDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Jsonplaceholder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
