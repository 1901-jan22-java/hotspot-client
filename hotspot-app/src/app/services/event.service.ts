import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var myParams = new URLSearchParams();


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public getEvents(){
    
  }
}
