import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, Input, Output, signal, ViewChild, WritableSignal } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MonthNamePipe } from "../../pipes/month-name.pipe";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Column } from './models/column.model';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

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
  @Input() dataSource: MatTableDataSource<any> | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Output() sizeOrPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() sortChange: EventEmitter<Sort> = new EventEmitter<Sort>();

  constructor() {

  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  onPageOrSizeChange(event:PageEvent) {
    console.log('onPageOrSizeChange', event);
    this.sizeOrPageChange.emit();
  }

  onSortChange(event:Sort) {
    console.log('onSortChange', event);
    this.sortChange.emit();
  }
}

