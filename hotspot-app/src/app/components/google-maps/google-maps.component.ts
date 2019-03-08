// import { Component, OnInit } from '@angular/core';
// import { ViewChild } from '@angular/core';
// import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
// import { MapsService } from '../../services/maps.service';
// // import { } from '@types/googlemaps';



// @Component({
//   selector: 'app-google-maps',
//   templateUrl: './google-maps.component.html',
//   styleUrls: ['./google-maps.component.css']
// })

// export class GoogleMapsComponent {
//   title = 'hotspot-app';
//   latitude: number = 40.742054;
//   longitude: number = -73.769417;
//   color = 'blue';

//   labelOptions = {
//     color: 'blue',
//     fontFamily: '',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     text: 'You Are Here !',
//     }

//   lat: string = ''; 
//   lng: string = '';
//   location: Object;
  
//   constructor(private map: MapsService ){}

//   ngOnInit(){

//     this.map.getLocation().subscribe(data => {
//       console.log(data); 
//       this.lat = data.latitude; 
//       this.lng = data.longitude;

//     })
//   }}


//// revised 

import { Component, OnInit } from '@angular/core';
 
import { ViewChild, AfterViewInit } from '@angular/core';
 
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
 
import { MapsService } from '../../services/maps.service';

declare var google: any;
 

@Component({
 
selector: 'app-google-maps',
 
templateUrl: './google-maps.component.html',
 
styleUrls: ['./google-maps.component.css']
 
})
 

export class GoogleMapsComponent implements OnInit, AfterViewInit{
 
title = 'hotspot-app';
 
lat: string; 
 
lng: string ;
 
location: Object;
 
myCoords = [
 
{latitude: 40.829659, longitude: -73.926186, EventName: 'Yankee Stadium'},
 
{latitude: 40.7656, longitude: -73.1924, EventName: 'BethPage Ball Park'},
 
{latitude: 40.7571, longitude: -73.8458, EventName: 'Citi Field'},

{latitude: 40.6826, longitude: -73.9754, EventName: 'Barclay Center'},
 
];
 



labelOptions = {
 
color: 'blue',
 
fontFamily: '',
 
fontSize: '14px',
 
fontWeight: 'bold',
 
text: 'You Are Here!',
 
}
 

@ViewChild('AgmMap') agmMap: AgmMap;
 

constructor(private map: MapsService ){}
 

ngOnInit(){
 

this.map.getLocation().subscribe(data => {console.log(data); 
 
  this.lat = data.latitude; 
   
  this.lng = data.longitude;
   
  //this.myCoords.push({ latitude: this.lat, longitude: this.lng });
   
  
  })
   
  }
   
  
  ngAfterViewInit() {
   
  console.log(this.agmMap);
   
  this.agmMap.mapReady.subscribe(map => {
   
  const bounds: LatLngBounds = new google.maps.LatLngBounds();
   
  for (const mm of this.myCoords) {
   
  bounds.extend(new google.maps.LatLng(mm.latitude, mm.longitude));
   
  }
   
  map.fitBounds(bounds);
   
  });
   
  }
   
  
  mapIdle(){
   
  console.log('idle');
   
  }
   
  
  }
   
  
  

  

  // L: any;
  // Lon: any;

  // constructor(){
  //   if (navigator)
  //   {
  //   navigator.geolocation.getCurrentPosition( pos => {
  //       this.Lon = +pos.coords.longitude;
  //       this.L = +pos.coords.latitude;
  //     });
  //   }
  // }



  // OnL(event){ 
  //   console.log(event); 
  //   this.latitude = event.coords.lat; 
  //   this.longitude = event.coords.lng;

  // }


// This is current location 
// export class AppComponent  {
//   name = 'Angular 5';
//   lat:any;
//   lng:any;
//   constructor(){
//     if (navigator)
//     {
//     navigator.geolocation.getCurrentPosition( pos => {
//         this.lng = +pos.coords.longitude;
//         this.lat = +pos.coords.latitude;
//       });
//     }
//   }
// }

// export class GoogleMapsComponent implements OnInit {
//   lat: number ;
//   lng: number ;
//   rooms = ROOMS;

//   constructor() { }

//   ngOnInit() {
//     this.rooms = ROOMS;
//     this.lat =  40.742054;
//     this.lng = -73.769417;

//   }

// }



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



