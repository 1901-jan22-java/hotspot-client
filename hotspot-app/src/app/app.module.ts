import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotspotNavbarComponent } from './components/hotspot-navbar/hotspot-navbar.component';
import { HotspotFooterComponent } from './components/hotspot-footer/hotspot-footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HotspotNavbarComponent,
    HotspotFooterComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
