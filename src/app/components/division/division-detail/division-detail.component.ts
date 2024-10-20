import { Component, Injector, OnInit } from '@angular/core';
import { Division } from '../../../model/division';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-division-detail',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatGridListModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './division-detail.component.html',
  styleUrl: './division-detail.component.scss'
})
export class DivisionDetailComponent implements OnInit{

  division: Division | undefined;

  isReadOnly: boolean = true;

  divisionEditForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder ){
    console.log('division-detail-component: ', this.division);
    let divisionId= this.route.snapshot.paramMap.get('id');
    this.division = this.getDivisionById(+divisionId!);
  }

  ngOnInit(): void {
    this.divisionEditForm = this.fb.group({
      id: [{value: this.division?.id, disabled: true}],
      name: [{value: this.division?.name, disabled: this.isReadOnly}, Validators.required],
      owner: [{value: this.division?.owner, disabled: this.isReadOnly}, Validators.required]
    })
  }

  getDivisionById(id: number): Division | undefined {
    return ELEMENT_DATA.find(e => (e.id === id));
  }

  editDivision(){
    this.division!.name = this.divisionEditForm.value.name;
    this.division!.owner = this.divisionEditForm.value.owner;
    this.isReadOnly = true;
    this.divisionEditForm.controls['name'].disable();
    this.divisionEditForm.controls['owner'].disable();
    alert('nome: '+this.division?.name+' owner: '+this.division?.owner);
  }

  toEditMode() {
    this.isReadOnly = false
    this.divisionEditForm.controls['name'].enable();
    this.divisionEditForm.controls['owner'].enable();
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
