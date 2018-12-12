import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  { path: '', redirectTo: '/day1', pathMatch: 'full' },
  { path: 'initial', component: SimpleComponent },
  { path: 'final', component: FinalComponent },
  { path: 'day1', component: SimpleComponent },
  { path: 'day2', component: SimpleComponent },
  { path: 'day3', component: SimpleComponent },
  { path: 'day4', component: SimpleComponent },
  { path: 'day5', component: SimpleComponent },
  { path: 'day6', component: SimpleComponent, }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
