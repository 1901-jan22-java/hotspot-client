import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreetingComponent } from 'src/app/components/greeting/greeting.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { GoogleMapsComponent } from 'src/app/components/google-maps/google-maps.component';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { EventComponent } from 'src/app/components/event/event.component'
import { EventpageComponent } from 'src/app/components/eventpage/eventpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'googlemaps', component: GoogleMapsComponent },
  { path: 'event', component: EventComponent },
  { path: 'eventpage', component: EventpageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}