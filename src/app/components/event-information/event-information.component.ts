import { Component } from '@angular/core';
import {RetrieveService} from "../../services/retrieve.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-event-information',
  templateUrl: './event-information.component.html',
  styleUrls: ['./event-information.component.css']
})
export class EventInformationComponent {
  information: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.information = service.getCollection("/EventInformation");
  }

}
