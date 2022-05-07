import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";
import {Router} from "@angular/router";

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
  introTitle: Observable<any>;

  constructor(service: DatabaseService, router: Router) {
    let basePath = "/Events";
    this.eventSections = service.getCollection(basePath + router.url + "/Sections");
    this.eventRelatedSections = service.getCollection(basePath + router.url + "/RelatedSections");
    this.eventGallery = service.getCollection(basePath + router.url + "/Gallery");
    this.eventInformation = service.getCollection(basePath + router.url + "/Information");
    this.eventRelatedContent = service.getCollection(basePath + router.url + "/RelatedContent");
    this.introTitle = service.getDocument("/IntroBG", router.url);
  }

}
