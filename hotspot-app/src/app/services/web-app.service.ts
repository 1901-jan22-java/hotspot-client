import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  public user: User;

  constructor() { }

}
