import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Division } from '../../model/division';

@Component({
  selector: 'app-division-search',
  standalone: true,
  imports: [MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,],
  templateUrl: './division-search.component.html',
  styleUrl: './division-search.component.scss'
})
export class DivisionSearchComponent {
  displayedColumns: {header: string, attribute: string}[] = [
    {header: 'Id', attribute: 'id'},
    {header: 'Name', attribute: 'name'},
    // {header: 'Activity Code', attribute: 'activityCode'},
    {header: 'Owner', attribute: 'owner'},
    {header: 'Number of Users', attribute: 'numberUser'}
  ];
  dataSource = new MatTableDataSource<Division>(ELEMENT_DATA);

  displayedColumnsAttribute = this.displayedColumns.map(c => c.attribute);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor () {
    // this.dataSource.filterPredicate = (data: Element, filter: string) => {
    //   return data.name.toLocaleLowerCase().includes(filter) ||
    //   data.symbol.label.toLocaleLowerCase().includes(filter);
    // }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: any ) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetailDivision(row: any) {
    console.log(row);
  }
}

const ELEMENT_DATA: Division[] = [
  {id: 1, name: 'Autostrade', owner: 'Grassi', numberUser: 7},
  {id: 2, name: 'Fabbrica', owner: 'Tornaroli', numberUser: 12},
  {id: 3, name: 'Commerciale', owner: 'Rossi', numberUser: 4},
  {id: 4, name: 'Assunzioni', owner: 'Pinochi', numberUser: 2},
  {id: 5, name: 'Eng', owner: 'Grasso', numberUser: 8},
  {id: 6, name: 'Esselunga', owner: 'Terzi', numberUser: 7},
  {id: 7, name: 'Lilly', owner: 'Capaccioli', numberUser: 12},
  {id: 8, name: 'ReAdvice', owner: 'Verdi', numberUser: 4},
  {id: 9, name: 'Beesy', owner: 'Leroy', numberUser: 2},
  {id: 10, name: 'Project', owner: 'Levis', numberUser: 8}
]

// const ELEMENT_DATA: Division[] = [
//   {id: 1, name: 'Autostrade', activityCode: 'A120', owner: 'Grassi', numberUser: 7},
//   {id: 2, name: 'Fabbrica', activityCode: 'A142', owner: 'Tornaroli', numberUser: 12},
//   {id: 3, name: 'Commerciale', activityCode: 'G789', owner: 'Rossi', numberUser: 4},
//   {id: 4, name: 'Assunzioni', activityCode: 'F517', owner: 'Pinochi', numberUser: 2},
//   {id: 5, name: 'Eng', activityCode: 'H864', owner: 'Grasso', numberUser: 8},
//   {id: 6, name: 'Esselunga', activityCode: 'S548', owner: 'Terzi', numberUser: 7},
//   {id: 7, name: 'Lilly', activityCode: 'E541', owner: 'Capaccioli', numberUser: 12},
//   {id: 8, name: 'ReAdvice', activityCode: 'E666', owner: 'Verdi', numberUser: 4},
//   {id: 9, name: 'Beesy', activityCode: 'D481', owner: 'Leroy', numberUser: 2},
//   {id: 10, name: 'Project', activityCode: 'Z518', owner: 'Levis', numberUser: 8}
// ]