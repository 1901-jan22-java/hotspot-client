import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

interface Location {
latitude: number; 
longitude: number;
postal: number;
city: String;
region: String;
country_name: String;
country: String; 

}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient ) { }

  getLocation(){
    return this.http.get<Location>('https://ipapi.co/json/')



  }
}
