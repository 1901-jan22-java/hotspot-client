import { Component, OnInit } from '@angular/core';
import { SpringAppService } from 'src/app/services/spring-app.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  users: User[];

  constructor(private saService: SpringAppService) {}

  ngOnInit() {
  }

  getAllUsers() {
    this.saService.getUsers().subscribe(
      resp => {
        if (resp != null){
          this.users = resp;
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

}
