import { ChangeDetectionStrategy, Component, ViewChild, AfterViewInit, WritableSignal, signal, inject, forwardRef } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MonthNamePipe } from "../pipes/month-name.pipe";
import { ResultTableComponent } from "../utilityComponents/result-table/result-table.component";
import { Column } from '../utilityComponents/result-table/models/column.model';
import { TableDataSource } from '../utilityComponents/result-table/models/table-data-source.model';
import { TableChanges } from '../utilityComponents/result-table/models/table-changes.model';
import { FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {toSignal} from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
  imports: [FormsModule, ReactiveFormsModule,MatFormFieldModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MonthNamePipe, ResultTableComponent,MatSelectModule,  MatIconModule],
  templateUrl: './search-time-report.component.html',
  styleUrl: './search-time-report.component.scss',
})
export class SearchTimeReportComponent implements AfterViewInit {
  displayedColumns!: Column[];
  tableTitle: string | undefined;
  dataSource!: TableDataSource;
  tableLoading: boolean = false;
  readonly nomeControl = new FormControl();
  readonly cognomeControl = new FormControl();
  readonly meseControl = new FormControl();
  readonly annoControl = new FormControl();
  readonly options = inject(FormBuilder).group({
    nome: this.nomeControl,
    cognome: this.cognomeControl,
    mese: this.meseControl,
    anno: this.annoControl
  });



  constructor() {
    // Create 100 users
    this.tableLoading = true;
    setTimeout(() => {
      this.displayedColumns = [
        new Column('id', 'Id'),
        new Column('name', 'Name'),
        new Column('surname', 'Surname'),
        new Column('month', 'Month'),
        new Column('year', 'Year')
      ];
    }, 5000);



    const users = Array.from({ length: 5 }, (_, k) => createNewUser(k + 1));




    // Sort the array by year (descending) and month (descending)
    users.sort((a, b) => {
      if (a.year === b.year) {
        return b.month.localeCompare(a.month);
      }
      return b.year.localeCompare(a.year);
    });

    setTimeout(() => {
      this.dataSource = new TableDataSource(100, users);
      this.tableLoading = false;
    }, 10000);
    // Assign the data to the data source for the table to render
    

  }

  searchData(){
    console.log('searchData', this.options.value);
  }

  ngAfterViewInit() {

  }

  onRowClick(event: any) {
    console.log('rowClicked', event)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
  }

  onPageOrSizeChange(event: PageEvent) {
    console.log('event', event)
  }

  onSortChange(event: Sort) {
    console.log('event', event)
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
