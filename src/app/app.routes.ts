import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'search-time-report',
        pathMatch: 'full',
    },
    {
        path: 'search-time-report',
        loadComponent() {
            return import('./search-time-report/search-time-report.component').then(m => m.SearchTimeReportComponent);
        },
    }
];
