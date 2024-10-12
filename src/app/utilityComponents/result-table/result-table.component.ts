import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, Input, Output, signal, ViewChild, WritableSignal } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MonthNamePipe } from "../../pipes/month-name.pipe";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Column } from './models/column.model';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { merge, tap } from 'rxjs';
import { TableDataSource } from './models/table-data-source.model';

const MONTHS: string[] = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12'
];
const YEARS: string[] = [
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012'
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-result-table',
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  standalone: true,
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultTableComponent {
  displayedColumns: string[] = ['name', 'surname', 'month', 'year'];
  @Input() dataSource!: TableDataSource;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() sizeOrPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();
  totalItems!: number;
  itemsPerPage: number=5;

  constructor() {

  }
  ngAfterViewInit() {
      this.totalItems = 100;

    // Trigger quando cambiano paginazione o ordinamento
    merge(this.paginator.page, this.sort.sortChange)
      .pipe(tap(() => this.onPageOrSortChange())) // Ricarica i dati a ogni cambiamento
      .subscribe();
  }

  onPageOrSortChange() {
    const pageEvent: PageEvent = {
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.totalItems
    };

    const sortEvent: Sort = this.sort.active ? {
      active: this.sort.active,
      direction: this.sort.direction
    } : { active: '', direction: '' };

    this.loadData(pageEvent, sortEvent);
  }

  loadData(pageEvent: PageEvent, sortEvent: Sort) {
    console.log('loadData', pageEvent, sortEvent);
    // Qui puoi fare una chiamata al backend per ottenere i dati paginati e ordinati
  }

  ngOnChanges() {

  }

  onPageOrSizeChange(event: PageEvent) {
    console.log('onPageOrSizeChange', event);
    this.sizeOrPageChange.emit(event);
  }

  onSortChange(event: Sort) {
    console.log('onSortChange', event);
    this.sortChange.emit(event);
  }
}
