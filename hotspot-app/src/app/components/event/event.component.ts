import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Events } from 'src/app/models/Events';
import { EventWrapper } from 'src/app/models/EventWrapper';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event_list: EventWrapper;
  events : Event[];
  dtTrigger: Subject<Event> = new Subject();

  constructor(private eService: EventService, private router: Router) {}

  ngOnInit() {
    console.log("IN EVENT COMPONENT CONSTRUCTOR");
    this.getEvents();
  }

  getEvents(){
    this.eService.getEvents().subscribe(
      resp => {
        if (resp != null){
          this.event_list = resp;
          this.events = this.event_list.events.event;
          console.log(this.events);
          this.dtTrigger.next();
        } else {
          console.error('Error loading events');
        }
      }
    );
  }

  toEventPage(event: Event){
    console.log("To event page called");
    console.log(event);
    let navigationExtras = {
      queryParams: {
        "event_id": event.id
      }
    };
    this.router.navigate(['/eventpage'], navigationExtras);
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

}
