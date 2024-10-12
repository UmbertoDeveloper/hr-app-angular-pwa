import { ChangeDetectionStrategy, Component, ViewChild, AfterViewInit, WritableSignal, signal } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MonthNamePipe } from "../pipes/month-name.pipe";
import { ResultTableComponent } from "../utilityComponents/result-table/result-table.component";
import { Column } from '../utilityComponents/result-table/models/column.model';
import { TableDataSource } from '../utilityComponents/result-table/models/table-data-source.model';

export interface TimeReportData {
  id: string;
  name: string;
  surname: string;
  month: string;
  year: string;
}

/** Constants used to fill up our data base. */
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
  selector: 'app-search-time-report',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MonthNamePipe, ResultTableComponent],
  templateUrl: './search-time-report.component.html',
  styleUrl: './search-time-report.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTimeReportComponent implements AfterViewInit {

  tableTitle: string | undefined;
  dataSource: TableDataSource;
  displayedColumns: string[] | undefined = [
    'name',
    'surname',
    'month',
    'year'
  ];



  constructor() {
    // Create 100 users
    const users = Array.from({ length: 5 }, (_, k) => createNewUser(k + 1));




    // Sort the array by year (descending) and month (descending)
    users.sort((a, b) => {
      if (a.year === b.year) {
        return b.month.localeCompare(a.month);
      }
      return b.year.localeCompare(a.year);
    });

    // Assign the data to the data source for the table to render
    this.dataSource = new TableDataSource(100,users);

  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): TimeReportData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  const surname =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  const month = MONTHS[Math.floor(Math.random() * MONTHS.length)];
  const year = YEARS[Math.floor(Math.random() * MONTHS.length)];

  return {
    id: id.toString(),
    name: name,
    surname: surname,
    month: month,
    year: year
  };
}
