import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { DashComponent } from './dash/dash.component';
import { Error404Component } from './error404/error404.component';
import { IconsComponent } from './icons/icons.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';

import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: 'addxd',
    component: TableComponent
  },
  {
    path:'add-profile',
    component: ProfileComponent
  },
  {
    path: 'add-icon',
    component: IconsComponent
  },
  {
    path: 'add-blank',
    component: BlankComponent
  },
  {
    path: 'add-error',
    component: Error404Component
  },
  {
    path: 'add-map',
    component: MapComponent
  },
  {
    path: 'add-dash',
    component: DashComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
