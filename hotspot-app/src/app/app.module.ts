import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HotspotNavbarComponent } from './components/hotspot-navbar/hotspot-navbar.component';
import { HotspotFooterComponent } from './components/hotspot-footer/hotspot-footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { RouterModule, Routes } from '@angular/router';
// import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AgmCoreModule} from '@agm/core';
import { EventComponent } from './components/event/event.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { EventpageComponent } from './components/eventpage/eventpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HotspotNavbarComponent,
    HotspotFooterComponent,
    LoginComponent,
    RegistrationComponent,
    GreetingComponent,
    GoogleMapsComponent,
    EventComponent,
    EventpageComponent
  ],
  imports: [
    BrowserModule,
    // libraries: ['geometry']
    HttpClientModule,
    DataTablesModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyCiqtKlov-AbjdUFOx58cAMFnMq8tMoBGo', // Insert application key here
     }),
     AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
