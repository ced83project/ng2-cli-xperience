import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { CanyonsComponent } from './canyons/canyons.component';
import { CanyonFormComponent } from './canyons/canyon-form.component';
import { TunnelsComponent } from './tunnels/tunnels.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'canyons', component: CanyonsComponent },
  { path: 'canyons/:id', component: CanyonFormComponent},
  { path: 'canyon', component: CanyonFormComponent},
  { path: 'tunnels', component: TunnelsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
