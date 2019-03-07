import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
// import { } from '@types/googlemaps';



@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
// export class GoogleMapsComponent implements OnInit {

  

//   constructor() { }

//   ngOnInit() {

    
//   }

// }

export class GoogleMapsComponent {
  title = 'hotspot-app';
  latitude: number = 40.742054;
  longitude: number = -73.769417;
  OnL(event){ 
    console.log(event); 
    this.latitude = event.coords.lat; 
    this.longitude = event.coords.lng;

  }
}



// export class GoogleMapsComponent {  
//   @ViewChild('gmap') gmapElement: any;
//   map: google.maps.Map;

//   ngOnInit() {
//     var mapProp = {
//       center: new google.maps.LatLng(18.5793, 73.8143),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
//   }
// }



