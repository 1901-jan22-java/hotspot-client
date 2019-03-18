import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { MapsService } from 'src/app/services/maps.service';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {
  sub;
  events: Event[];
  event: Event;
  music: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router, private eService: EventService, private map: MapsService) { }

  public lat: number;
  public lng: number;
  public origin: any;
  public destination: any;
  postalCode: number;
  city: String;
  countryName: String;
  countryAbbr: String;
  location: Object;
  region: String;

  ngOnInit() {
    console.log("In event page");
    this.sub = this.route.queryParams.subscribe(params =>
      { let id = params["event_id"];
        let category = params["category"];
        let latitude = params["latitude"];
        let LL = +params.latitude;
        let YY =+params.longitude;
        this.destination = {lat: LL, lng: YY}; 
        let longitude = params["longitude"];
        let timeframe = params["timeframe"];
        let radius = params["radius"];
      console.log(category + id + latitude + longitude + timeframe + radius);
       if(id){
        this.getEvent(id, category, latitude, longitude, timeframe, radius);
        if(category=="Concert"){
          this.music=true;
        }
      } 

      });

      

      this.getDirection();

      
  }

  getDirection() {
    this.map.getLocation().subscribe(data => {
      //console.log(data); 
      this.lat = data.latitude; 
      this.lng = data.longitude;
      this.origin ={lat:data.latitude, lng:data.longitude}; 
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
    // this.origin = { lat:this.lat, lng:this.lng };
    // this.origin = { lat:40.6548, lng: -73.6097 };
    // this.destination = { lat: 40.7484, lng: -73.862 };
    // this.destination = { lat: 24.799524, lng: 120.975017 };
   console.log(this.lat); 
   console.log(this.lng); 
   console.log(origin); 
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }

  getEvent(id:string, category:string, latitude:any, longitude:any, timeframe:any, radius:any){
    this.eService.getEvents(longitude, latitude, radius, category, timeframe).subscribe(
      resp => {
        if (resp != null){
          this.events = resp.events.event;
          console.log(this.events);
          for(let e of this.events){
            if(e.id == id){
              this.event = e;
              console.log(this.event);
            } else {
              //console.log(e.id +" is not equal to " + id);
            }
          }
        } else {
          console.error('Error loading event');
        }
      }
    );
  }
  
}
