import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import{Geolocation} from "../models/Geolocation"

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  url ="https://api.opencagedata.com/geocode/v1/json?"

  constructor(private http: HttpClient) { }

  getCoords(locationName:string){
    console.log("Getting Long and Lat for "+ locationName)
    const params = new HttpParams().set("q",locationName).set("key","485fcbe7cb4244f481eb537fffbc47a8");
    return(this.http.get<Geolocation>(this.url,{params}));
  }
}
