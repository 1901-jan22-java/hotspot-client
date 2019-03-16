
import { Component, OnInit } from '@angular/core'; 
import { ViewChild, AfterViewInit, OnChanges } from '@angular/core'; 
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core'; 
import { MapsService } from '../../services/maps.service';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Router } from '@angular/router';
import { Events } from 'src/app/models/Events';
import { EventWrapper } from 'src/app/models/EventWrapper';
import { SportsService } from '../../services/sports.service';
import { nightLifeService } from '../../services/nightLife.service';
import { ConcertsService } from '../../services/concerts.service';
//import { Router } from 'express';


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

  constructor(private map: MapsService, private es: EventService, private ss: SportsService, private nl: nightLifeService, private cl: ConcertsService, private router: Router ){}

  category: string;

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
        id: "", 
        category: "",
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
        image: {
          medium : {
              height: "",
              url : "",
              width: ""
            }
        },
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
    this.customMap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('nights'));
    this.customMap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('concerts'));


  }

  festivalClicked(){
    this.getEvents();
  }

  sportsClicked(){
    this.getSports();
  }

  nightClicked(){
    this.getNight();
  }

  concertClicked(){
    this.getNight();
  }

  getEvents(){
    this.es.getEvents(this.lng.toString(), this.lat.toString(), "25", "Festival", "This Weekend").subscribe(
      resp => {console.log(resp);
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          this.events.push({ 
            id: "", 
            category: "Festival",
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
            image: {
              medium : {
                  height: "",
                  url : "",
                  width: ""
                }
            },
            start_time : "", 
            title: 'You Are Here!',
            performers: "",
            image_url: "",
            description: "" 
          });
          console.log(this.events);
          this.category="Festival";
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  getSports(){
    this.es.getEvents(this.lng.toString(), this.lat.toString(), "25", "Sports", "This Weekend").subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          this.events.push({ 
            id: "", 
            category: "Sports",
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
            image: {
              medium : {
                  height: "",
                  url : "",
                  width: ""
                }
            },
            image_url: "",
            description: "" 
          });
          console.log(this.events);
          this.category="Sports";
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  getNight(){
    this.es.getEvents(this.lng.toString(), this.lat.toString(), "25", "NightLife", "This Weekend").subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          this.events.push({ 
            id: "", 
            category: "Nightlife",
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
            image: {
              medium : {
                  height: "",
                  url : "",
                  width: ""
                }
            },
            performers: "",
            image_url: "",
            description: "" 
          });
          console.log(this.events);
          this.category="Nightlife";
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  getConcerts(){
    this.es.getEvents(this.lng.toString(), this.lat.toString(), "25", "Concert", "This Weekend").subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          this.events.push({ 
            id: "", 
            category: "Concert",
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
            image: {
              medium : {
                  height: "",
                  url : "",
                  width: ""
                }
            },
            description: "" 
          });
          console.log(this.events);
          this.category="Concerts";
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  toEventPage(event: Event){
    console.log("To event page called");
    console.log(event);
    let navigationExtras = {
      queryParams: {
        "event_id": event.id,
        "category" : this.category,
        "latitude": event.latitude,
        "longitude": event.longitude,
        "radius": "25",
        "timeframe": "This Weekend"
      }
    };
    this.router.navigate(['/eventpage'], navigationExtras);
  }

  labelOptions = {

    color: 'blue',

    fontFamily: '',

    fontSize: '14px',

    fontWeight: 'bold',

    text: 'You Are Here!',

  }  
}
   
  
  
