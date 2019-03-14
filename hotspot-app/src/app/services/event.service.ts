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

const params = new HttpParams()
  .set('app_key', 'cKxPsB44vwSF3z42')
  .set('location', 'San Diego')
  .set('sort_order', 'popularity');


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

 
  public getEvents(){
    return this.http.get<EventWrapper>(this.url, {params});
  }


  public getEventsByLocation(data: any){
   
    let params = new HttpParams();
    Object.keys(data).forEach(function (key){
      params = params.set('app_key', 'cKxPsB44vwSF3z42')
      .set('location', data)
      .set('category', 'festival_parades');
    });
      
    return this.http.get<EventWrapper>(this.url, {params});
  }

  
}
