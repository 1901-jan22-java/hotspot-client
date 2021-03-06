import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmDirectionModule } from 'agm-direction';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HotspotNavbarComponent } from './components/hotspot-navbar/hotspot-navbar.component';
import { HotspotFooterComponent } from './components/hotspot-footer/hotspot-footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { EventService } from './services/event.service';
import { SportsService } from './services/sports.service';
import { EventComponent } from './components/event/event.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { nightLifeService } from './services/nightLife.service';
import { ConcertsService } from './services/concerts.service';
import { EventpageComponent } from './components/eventpage/eventpage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




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
    HttpClientModule,
    DataTablesModule,
     AgmCoreModule.forRoot({
       apiKey: 'AIzaSyCiqtKlov-AbjdUFOx58cAMFnMq8tMoBGo', // Insert application key here
     }),
     AppRoutingModule,
     FormsModule,
     AgmDirectionModule,
     NgbModule
  ],
  providers: [
    EventService,
    SportsService,
    nightLifeService,
    ConcertsService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}
