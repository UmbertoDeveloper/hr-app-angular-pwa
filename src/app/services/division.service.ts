import { Injectable } from '@angular/core';
import { Division } from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  ELEMENT_DATA: Division[] = [
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

  constructor() { }

  getDivisionList() {
    return this.ELEMENT_DATA;
  }

  getDivisionById(id: number): Division | undefined{
    return this.ELEMENT_DATA.find(e => (e.id === id));
  }


  
}
