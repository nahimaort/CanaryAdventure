import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'event-page',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  eventSections: Observable<any[]>;
  eventRelatedSections: Observable<any[]>;
  eventGallery: Observable<any[]>;
  eventInformation:  Observable<any[]>;
  eventRelatedContent: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.eventSections = service.getCollection("/EventSections");
    this.eventRelatedSections = service.getCollection("/EventRelatedSections");
    this.eventGallery = service.getCollection("/EventGallery");
    this.eventRelatedContent = service.getCollection("/EventRelated");
    this.eventInformation = service.getCollection("/EventInformation");
  }

}
