import { Component, ElementRef, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeftSideBarToggleService } from '../../services/side-bar-toggle/left-side-bar-toggle.service';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
              '../z-layout-shared/layout.shared.scss']
})
export class HeaderComponent  {

  @Output() sendEventToParent = new EventEmitter<string>();
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor() {}

  close() {
    this.sidenav.close();
  }

  _sendEventToParent() {
    this.sendEventToParent.emit("open side-navbar");
  }
}
