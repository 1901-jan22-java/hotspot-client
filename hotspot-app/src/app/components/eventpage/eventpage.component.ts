import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {
  sub;
  events: Event[];
  event: Event;
  constructor(private route: ActivatedRoute,
    private router: Router, private eService: EventService) { }

  ngOnInit() {
    console.log("In event page");
    this.sub = this.route.queryParams.subscribe(params =>
      { let id = params["event_id"];
      console.log(id);
       if(id){
        this.getEvent(id);
      } 

      });
  }

  getEvent(id:string){
    this.eService.getEvents().subscribe(
      resp => {
        if (resp != null){
          this.events = resp.events.event;
          for(let e of this.events){
            if(e.id == id){
              this.event = e;
              console.log(this.event);
            } else {
              console.log(e.id +" is not equal to " + id);
            }
          }
        } else {
          console.error('Error loading event');
        }
      }
    );
  }
  
  ngOnDestroy(){
    this.sub.unsubsribe();
  }
}
