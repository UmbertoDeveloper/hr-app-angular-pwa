import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-user-content-layout',
  templateUrl: './user-content-layout.component.html',
  styleUrls: ['./user-content-layout.component.scss']
})
export class UserContentLayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() { }

  ngOnInit() {
  }


  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}