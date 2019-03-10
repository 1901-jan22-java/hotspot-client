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


// let params = new HttpParams()
//   .set('app_key', 'cKxPsB44vwSF3z42')
//   .set('location', 'Texas')
//   .set('category', 'festival_parades'); 

@Injectable({
  providedIn: 'root'
})
export class EventService {
  lat: number; 
  lng: number;
  postalCode: number;
  city: String;
  countryName: String;
  countryAbbr: String; 
  region: String;


  url= "http://api.eventful.com/json/events/search?"

  constructor(private http: HttpClient, private ms: MapsService) { }

  // ngOninit(){
  //   this.getLocation();
  // }

 //  public getRegion(){
    
 //      this.ms.getLocation().subscribe(data => {
 //      this.lat = data.latitude; 
 //      this.lng = data.longitude;
 //      this.postalCode = data.postal;
 //      this.city = data.city;
 //      this.countryName = data.country_name;
 //      this.countryAbbr = data.country;
 //      this.region = data.region;
 // })
 //      return this.countryName;


 //  }

  //sports, concerts, night life

  public getEvents(data: any){
    //console.log(this.getRegion());
    //console.log("REGION " +this.region);
    //this.params.append('location', <string>this.getLocation());
    //console.log(this.params.toString());
    let params = new HttpParams();
    Object.keys(data).forEach(function (key){
      params = params.set('app_key', 'cKxPsB44vwSF3z42')
      .set('location', data)
      .set('category', 'festival_parades');
    });
      
    //params.set('location', <string>this.getRegion());
    return this.http.get<EventWrapper>(this.url, {params});
  }
}
