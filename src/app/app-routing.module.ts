import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import { AboutComponent } from './about/about.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    pathMatch: 'full'
  },
  { path: 'About', component: AboutComponent},
  { path: 'CovidInfo', component: CovidInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
