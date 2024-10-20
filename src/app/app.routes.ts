import { RouterModule, Routes } from '@angular/router';
import { DivisionSearchComponent } from './component/division/division-search.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { NgModule } from '@angular/core';
import { DivisionDetailComponent } from './components/division/division-detail/division-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '**', redirectTo: '/home'},
    { path: 'home', component: MainContentComponent},
    { path: 'division', component: DivisionSearchComponent},
    { path: 'division-detail/:id', component: DivisionDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }