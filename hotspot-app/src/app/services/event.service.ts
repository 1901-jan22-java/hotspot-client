import { Injectable } from '@angular/core';
import { Events } from '../models/Events';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { EventWrapper } from '../models/EventWrapper';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url= "http://api.eventful.com/json/events/search?"

  constructor(private http: HttpClient) { }

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
}
