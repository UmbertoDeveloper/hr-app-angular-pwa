import { RouterModule, Routes } from '@angular/router';
import { DivisionSearchComponent } from './component/division/division-search.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '**', redirectTo: '/home'},

    { path: 'home', component: MainContentComponent},
    { path: 'division', component: DivisionSearchComponent},
    {
        path: 'time-reports',
        loadComponent() {
            return import('./search-time-report/search-time-report.component').then(m => m.SearchTimeReportComponent);
        },
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
