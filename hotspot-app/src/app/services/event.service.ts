import { Injectable } from '@angular/core';
import { Events } from '../models/Events';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { EventWrapper } from '../models/EventWrapper';

const params = new HttpParams()
  .set('app_key', 'cKxPsB44vwSF3z42')
  .set('location', 'San Diego');


@Injectable({
  providedIn: 'root'
})
export class EventService {

  url= "http://api.eventful.com/json/events/search?"

  constructor(private http: HttpClient) { }

  public getEvents(){
    return this.http.get<EventWrapper>(this.url, {params});
  }
}
