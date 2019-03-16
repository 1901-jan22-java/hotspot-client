import { Injectable } from '@angular/core';
import { Events } from '../models/Events';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { EventWrapper } from '../models/EventWrapper';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { MapsService } from '../services/maps.service';
import { Component, OnInit } from '@angular/core'; 

const headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin','*')
  .set('Access-Control-Allow-Methods', 'POST,GET')
  .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
  .set('Content-Type', 'application/json')
  .set('Authorization', 'Basic my-auth-token');

import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  lat: string; 
  lng: string;
  postalCode: number;
  city: String;
  countryName: String;
  countryAbbr: String; 
  region: String;


  url= "http://api.eventful.com/json/events/search?"

  constructor(private http: HttpClient, private ms: MapsService) { }

  public getEvents(longitude:string,latitude:string,radius:string,category:string,timeFrame:string){
     var cordsString= latitude+","+longitude;
     console.log(cordsString);
      const params = new HttpParams()
      .set('app_key', 'cKxPsB44vwSF3z42')
      .set("q",category)
      .set('where', cordsString)
      .set("date","future")
      .set("page_size","20")
      .set("within",radius)
      .set("t",timeFrame)
      .set("sort_order","popularity");
      return this.http.get<EventWrapper>(this.url,{params});
 
  }


  public getEventsByLocation(data: any){
   
    let params = new HttpParams();
    //Object.keys(data).forEach(function (key){
      params = params.set('app_key', 'cKxPsB44vwSF3z42')
      .set('location', data)
      .set('q', 'Festival')
      .set("date","future")
      .set("page_size","20")
      .set("within", "25")
      .set("t", "This Weekend")
      .set("sort_order","popularity");
    //});
      
    return this.http.get<EventWrapper>(this.url, {params});
  }

  
}
