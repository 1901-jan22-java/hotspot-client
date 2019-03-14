import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Events } from 'src/app/models/Events';
import { EventWrapper } from 'src/app/models/EventWrapper';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { getClosureSafeProperty } from '@angular/core/src/util/property';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event_list: EventWrapper;
  events : Event[];

  //search Filtering variables
  userInputLocation: string; //default location
  radius: string = "25"; //default radius value if user does not input one
  userInputCategories:string[]=[];
  checkConcert: boolean;
  checkFestival: boolean;
  checkSports: boolean;
  checkNightlife: boolean;
  timeFrame:string ="This Weekend"; // default option
  longitude:string;
  latitude:string;

  constructor(private geoService:GeolocationService,private eService: EventService) {}

  ngOnInit() {
    console.log("IN EVENT COMPONENT onInit");
    this.dummyEventfulCall();
  };

  dummyEventfulCall(){
    /* To get around the issue that only the first request returns the desired number of events and 
       each subsequent request only returns half of the original. This runs on initilizing the page and makes
       a hard coded API call that the user never sees, but it will make it so that when the user searches it
       will return the same amount of results every time.( not sure if this issue is some sort of API sercurity/
        defense mechanism or an issue with the logic but this circumvents it for now)
    */
    this.eService.getEvents("-74.0060","40.7128",this.radius,"Concert",this.timeFrame).subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events =this.event_list.events.event;
          this.events.length=0;
        }
        else {
          console.error('Error loading events');
        }
      });
  }
  loadTable(){
    console.log("in load table");
    //clears the table if it has contents
    if(this.events != undefined){this.events.length=0;}
    this.getCords();
  }
  getCords(){
    console.log("in getCords");
    console.log(this.userInputLocation);
    this.fillCategories();
    console.log(this.userInputCategories);
 
   //gets the longitude and latitude given the input name so seaching by radius will work
   this.geoService.getCoords(this.userInputLocation).subscribe(
     resp2 =>{
     this.latitude=(resp2.results[0].geometry.lat);
     this.longitude=(resp2.results[0].geometry.lng);
     //console.log(this.latitude+" "+this.longitude);
    }, error =>{},
      ()=>{ //done method
      console.log("in getCords done method");
      for(let i=0;i<this.userInputCategories.length;i++){
        console.log(this.userInputCategories[i]);
        this.getEvents2(this.userInputCategories[i]);
      }
      
      } 
    );
  }
  
  getEvents2(category:string){
    console.log("in get events");
    this.eService.getEvents(this.longitude,this.latitude,this.radius,category,this.timeFrame).subscribe(
      resp => {
        if (resp != null){
          var placeholderEvents:Event[]=[];
          placeholderEvents.length=0;
          this.event_list = resp;
          placeholderEvents =this.event_list.events.event;
          console.log(this.event_list.events.event);
          console.log(placeholderEvents);
          if(this.events == undefined){this.events = placeholderEvents;}
          else{
            console.log(placeholderEvents);
            console.log(placeholderEvents.length);
            for(let i=0; i<placeholderEvents.length;i++){
              var e = placeholderEvents.pop();
              e.category = category;
              //console.log(category);
              this.events.push(e);
          }
          // for(let i=0; i<this.events.length;i++){
          //   console.log(this.events[i].category);
          // }
          console.log(this.events);
          } 
        }
        else {
          console.error('Error loading events');
        
      } 
      });
      
  }

  fillCategories(){
    //each checkbox for a category has a boolean value attatched to it
    //If its true then the user want to search for that category of event
    this.userInputCategories.length=0; //empties the array
    if(this.checkConcert==true){
      this.userInputCategories.push("Concert");
    }
    if(this.checkFestival==true){
      this.userInputCategories.push("Festival");
    }
    if(this.checkSports==true){
      this.userInputCategories.push("Sports");
    }
    if(this.checkNightlife==true){
      this.userInputCategories.push("Nightlife");
    }
  }

}
