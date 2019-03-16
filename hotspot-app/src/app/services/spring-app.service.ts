import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class SpringAppService {

  readonly BASE_URL = 'http://localhost:4242';
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.users = this.http.get<User[]>(this.BASE_URL + '/users');
  }

  getUserByEmail(email: string) {
    return this.user = this.http.get<User>(this.BASE_URL + '/users/email=' + email);
  }

}
