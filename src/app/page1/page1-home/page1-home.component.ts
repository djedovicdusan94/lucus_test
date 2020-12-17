import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ConfirmService } from 'src/app/shared/confirm-dialog/confirm.service';
import { Page1Service } from 'src/app/_services/page1/page1.service';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';
import { Jsonplaceholder } from 'src/app/_models/jsonplaceholder.model';

@Component({
  selector: 'app-page1-home',
  templateUrl: './page1-home.component.html',
})
export class Page1HomeComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'title', 'body', 'actions'];

  dataSource = new MatTableDataSource();
  showPage1LoadingSpinner: boolean = false;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;

  constructor(
    private page1Service: Page1Service,
    public dialog: MatDialog,
    private confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.getRows();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getRows() {
    this.page1Service.getMockData().subscribe((result: any) => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data: Element, filter: string) => {
        return data['userId'] == filter;
      };
      this.showPage1LoadingSpinner = false;
    });
  }

  deleteRow(id: number) {
    const name = `Delete record with id: ${id}?`;

    this.confirmService
      .confirm(name, 'Are you sure. This change is permanent!')
      .subscribe((result: any) => {
        if (result) {
          this.showPage1LoadingSpinner = true;
          return this.page1Service
            .deleteMockRow(id)
            .subscribe((result: Jsonplaceholder) => {
              this.getRows();
            });
        }
      });
  }

  getLatesId() {
    return this.dataSource.data[this.dataSource.data.length - 1]['id'];
  }

  openAddDialog() {
    const lastId = this.getLatesId() + 1;
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      width: '550px',
      data: {
        userId: '',
        id: lastId,
        title: '',
        body: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.page1Service
          .addMockRow(result)
          .subscribe((result: Jsonplaceholder) => {
            this.getRows();
          });
      }
    });
  }

  openEditDialog(param: Jsonplaceholder): void {
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      width: '550px',
      data: {
        userId: param.userId,
        id: param.id,
        title: param.title,
        body: param.body,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateMockRow(result);
      }
    });
  }

  updateMockRow(param: Jsonplaceholder) {
    this.page1Service
      .updateMockRow(param)
      .subscribe((result: Jsonplaceholder) => {
        this.getRows();
      });
  }
}
