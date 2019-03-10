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
import { ViewChild, AfterViewInit, OnChanges } from '@angular/core'; 
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core'; 
import { MapsService } from '../../services/maps.service';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Events } from 'src/app/models/Events';
import { EventWrapper } from 'src/app/models/EventWrapper';
import { SportsService } from '../../services/sports.service';

declare const google: any;
 
@Component({ 
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css'] 
})
 

export class GoogleMapsComponent implements OnInit{ 
  title = 'hotspot-app';
  lat: number; 
  lng: number ;
  postalCode: number;
  city: String;
  countryName: String;
  countryAbbr: String;
  location: Object;
  region: String;
  myCoords = [
  {latitude: 40.829659, longitude: -73.926186, EventName: 'Yankee Stadium'},
  {latitude: 40.7656, longitude: -73.1924, EventName: 'BethPage Ball Park'},
  {latitude: 40.7571, longitude: -73.8458, EventName: 'Citi Field'},
  {latitude: 40.6826, longitude: -73.9754, EventName: 'Barclay Center'},
  ];

  myLocation: Event;
  event_list: EventWrapper;
  events : Event[];
  customMap: any;

  @ViewChild('AgmMap') agmMap: AgmMap;

  constructor(private map: MapsService, private es: EventService, private ss: SportsService ){}

  ngOnInit(){
    this.map.getLocation().subscribe(data => {
      //console.log(data); 
      this.lat = data.latitude; 
      this.lng = data.longitude;
      this.postalCode = data.postal;
      this.city = data.city;
      this.countryName = data.country_name;
      this.countryAbbr = data.country;
      this.region = data.region;

      this.events = [{ 
        id: 0, 
        postalCode: this.postalCode, 
        latitude: this.lat, 
        longitude: this.lng, 
        url: "", 
        venue_url: "",
        venue_name: "",
        venue_id: 0,
        venue_display: true,
        venue_address: "",
        city_name: this.city,
        country_name: this.countryName,
        country_abbr: this.countryAbbr,
        start_time : "", 
        title: 'You Are Here!',
        performers: "",
        image_url: "",
        description: "" 
      }];
    })
  }
 
  // ngAfterViewInit() {
  //   this.agmMap.mapReady.subscribe(map => {
  //     const bounds: LatLngBounds = new google.maps.LatLngBounds();
  //     for (const mm of this.events) {
  //       bounds.extend(new google.maps.LatLng(mm.latitude, mm.longitude));
  //     }
  //     map.fitBounds(bounds);
  //   });
    

  // }
  
  mapIdle(){
    console.log('idle');
  }

  mapReady(event: any){
    this.customMap = event;
    this.customMap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('festivals'));
    this.customMap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('sports'));
  }

  festivalClicked(){
    this.getEvents();
  }

  sportsClicked(){
    this.getSports();
  }

  getEvents(){
    this.es.getEvents(this.region).subscribe(
      resp => {console.log(resp);
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          this.events.push({ 
            id: 0, 
            postalCode: this.postalCode, 
            latitude: this.lat, 
            longitude: this.lng, 
            url: "", 
            venue_url: "",
            venue_name: "",
            venue_id: 0,
            venue_display: true,
            venue_address: "",
            city_name: this.city,
            country_name: this.countryName,
            country_abbr: this.countryAbbr,
            start_time : "", 
            title: 'You Are Here!',
            performers: "",
            image_url: "",
            description: "" 
          });
          console.log(this.events);
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  getSports(){
    this.ss.getEvents(this.region).subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          this.events.push({ 
            id: 0, 
            postalCode: this.postalCode, 
            latitude: this.lat, 
            longitude: this.lng, 
            url: "", 
            venue_url: "",
            venue_name: "",
            venue_id: 0,
            venue_display: true,
            venue_address: "",
            city_name: this.city,
            country_name: this.countryName,
            country_abbr: this.countryAbbr,
            start_time : "", 
            title: 'You Are Here!',
            performers: "",
            image_url: "",
            description: "" 
          });
          console.log(this.events);
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  labelOptions = {

    color: 'blue',

    fontFamily: '',

    fontSize: '14px',

    fontWeight: 'bold',

    text: 'You Are Here!',

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



