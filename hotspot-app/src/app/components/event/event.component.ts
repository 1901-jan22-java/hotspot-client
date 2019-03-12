import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Events } from 'src/app/models/Events';
import { EventWrapper } from 'src/app/models/EventWrapper';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event_list: EventWrapper;
  events : Event[];

  constructor(private eService: EventService) {}

  ngOnInit() {
    console.log("IN EVENT COMPONENT CONSTRUCTOR");
    this.getEvents();
  }

  getEvents(){
    this.eService.getEvents("Canada").subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          console.log(this.events);
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

}
