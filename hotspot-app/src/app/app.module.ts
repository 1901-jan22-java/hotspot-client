import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HotspotNavbarComponent } from './components/hotspot-navbar/hotspot-navbar.component';
import { HotspotFooterComponent } from './components/hotspot-footer/hotspot-footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {HttpClient, HttpClientModule} from '@angular/common/http';

// import [AgmCoreModule] from '@agm/core'; 
// import [HttpClientModule] from '@angualr/common/http'; 
import {AgmCoreModule} from '@agm/core'
=======
import { HttpClient } from 'selenium-webdriver/http';
import {AgmCoreModule} from '@agm/core';
>>>>>>> 873c94e879f2ade9b0c125caa81d298e9ad51f81



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
    // libraries: ['geometry']
    HttpClientModule,  
     AgmCoreModule.forRoot({
<<<<<<< HEAD
       apiKey: 'AIzaSyCiqtKlov-AbjdUFOx58cAMFnMq8tMoBGo'
=======
       apiKey: '', // Insert application key here
>>>>>>> 873c94e879f2ade9b0c125caa81d298e9ad51f81
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {}
