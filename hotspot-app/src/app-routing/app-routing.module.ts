import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreetingComponent } from 'src/app/components/greeting/greeting.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { GoogleMapsComponent } from 'src/app/components/google-maps/google-maps.component';

const routes: Routes = [
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'googlemaps', component: GoogleMapsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}