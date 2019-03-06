import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HotspotNavbarComponent } from './components/hotspot-navbar/hotspot-navbar.component';
import { HotspotFooterComponent } from './components/hotspot-footer/hotspot-footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import {AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    HotspotNavbarComponent,
    HotspotFooterComponent,
    LoginComponent,
    RegistrationComponent,
    GreetingComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
     AgmCoreModule.forRoot({
       apiKey: // Insert application key here
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
