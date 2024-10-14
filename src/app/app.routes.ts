import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { NgModule } from '@angular/core';
import { DivisionDetailComponent } from './components/division/division-detail/division-detail.component';
import { DivisionDetailResolver } from './resolver/division-detail.resolver';
import { SearchDivisionComponent } from './components/division/search-division/search-division.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '**', redirectTo: '/home'},
    { path: 'home', component: MainContentComponent},
    { path: 'search-division',
        component: SearchDivisionComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }