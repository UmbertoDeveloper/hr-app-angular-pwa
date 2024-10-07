import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { DomSanitizer } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list'; 
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,LayoutModule,MatListModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hr-app-angular-pwa';

  isScreenSmall: boolean = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private router: Router,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    // Controlla se lo schermo è piccolo (ad esempio, visualizzazione mobile)
    this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      ).subscribe(isSmall => {
        this.isScreenSmall = isSmall;
      });
  }

  public ngOnInit() {}
 
  close() {
    this.sidenav.close();
  }

  eventFromChild() {
    this.sidenav.open();
  }
}
