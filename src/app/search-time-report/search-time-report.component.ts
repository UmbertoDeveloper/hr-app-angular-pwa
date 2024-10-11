import { ChangeDetectionStrategy, Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MonthNamePipe } from "../pipes/month-name.pipe";

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
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MonthNamePipe],
  templateUrl: './search-time-report.component.html',
  styleUrl: './search-time-report.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchTimeReportComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'surname', 'month', 'year'];
  dataSource!: MatTableDataSource<TimeReportData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    // Sort the array by year (descending) and month (descending)
    users.sort((a, b) => {
      if (a.year === b.year) {
      return b.month.localeCompare(a.month);
      }
      return b.year.localeCompare(a.year);
    });

    this.dataSource
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: TimeReportData, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
      const filterArray = transformedFilter.split(' ');

      return filterArray.every(filterWord => 
      data.name.toLowerCase().includes(filterWord) ||
      data.surname.toLowerCase().includes(filterWord) ||
      data.month.toLowerCase().includes(filterWord) ||
      data.year.toLowerCase().includes(filterWord)
      );
    };

    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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
