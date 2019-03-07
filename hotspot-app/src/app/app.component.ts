import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: '../index.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotspot-app';
  latitude = 40.7362;
  longitude = 73.8161;
  onClk(event){
    console.log(event);
  }
}
