import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
import { MapsService } from '../maps.service';
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

  lat: string = ''; 
  lng: string = '';
  location: Object;
  
  constructor(private map: MapsService ){}

  ngOnInit(){

    this.map.getLocation().subscribe(data => {
      console.log(data); 
      this.lat = data.latitude; 
      this.lng = data.longitude;

    })
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
}

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



