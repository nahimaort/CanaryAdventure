import { Component } from '@angular/core';
import {RetrieveService} from "./services/retrieve.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: any;

  constructor(private service: RetrieveService) {
    this.events = this.service.getCollection("/RelatedInformation");
  }
}

