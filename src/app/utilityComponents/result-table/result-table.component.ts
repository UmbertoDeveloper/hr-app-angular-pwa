import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, Input, Output, signal, SimpleChanges, ViewChild, WritableSignal } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MonthNamePipe } from "../../pipes/month-name.pipe";
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Column } from './models/column.model';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { merge, tap } from 'rxjs';
import { TableDataSource } from './models/table-data-source.model';
import { TableChanges } from './models/table-changes.model';


@Component({
  selector: 'app-result-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  standalone: true,
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
})
export class ResultTableComponent {
  @Input() displayedColumns!: Column[];
  @Input() isLoading!: boolean;
  @Input() dataSource!: TableDataSource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() onPageOrSizeChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() onSortChange: EventEmitter<Sort> = new EventEmitter<Sort>();
  totalItems!: number;
  displayedColumnsAttribute!: string[];
  itemsPerPage: number = 5;
  @Output() onRowClick: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['displayedColumns'] && changes['displayedColumns'].currentValue) {
      this.displayedColumnsAttribute = this.displayedColumns.map((column: Column) => column.attribute);
    }
  }


  ngAfterViewInit() {
    this.totalItems = 100;

    // Trigger quando cambiano paginazione o ordinamento
    this.paginator.page
      .pipe(tap(() => this.pageOrSizeChange()))
      .subscribe();

    this.sort.sortChange
      .pipe(tap(() => this.sortChange()))
      .subscribe();
  }

  onPageOrSortOrSizeChange() {
    const pageEvent: PageEvent = {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.totalItems
    };

    const sortEvent: Sort = this.sort.active ? {
      active: this.sort.active,
      direction: this.sort.direction
    } : { active: '', direction: '' };


  }

  loadData() {

    // Qui puoi fare una chiamata al backend per ottenere i dati paginati e ordinati
  }
  clickOnRow(row: any) {
    this.onRowClick.emit(row);
  }


  pageOrSizeChange() {
    const pageEvent: PageEvent = {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.totalItems
    };
    this.onPageOrSizeChange.emit(pageEvent);

  }

  sortChange() {
    const sortEvent: Sort = this.sort.active ? {
      active: this.sort.active,
      direction: this.sort.direction
    } : { active: '', direction: '' };

    this.onSortChange.emit(sortEvent);
  }
}
