import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hr-app-angular-pwa';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
  ) {
  }

  public ngOnInit() {}
 
  close() {
    this.sidenav.close();
  }

  eventFromChild() {
    this.sidenav.open();
  }
}
