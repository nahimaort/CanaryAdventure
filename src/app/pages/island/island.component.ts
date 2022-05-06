import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'island-page',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.css']
})
export class IslandComponent {
  islandDescription: Observable<any[]>;
  islandWhatToDo: Observable<any[]>;
  islandWhereToStay: Observable<any[]>;
  islandHowToGetThereDescription:  Observable<any[]>;
  islandHowToGetThereContent:  Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.islandDescription = service.getCollection("/IslandDescription");
    this.islandWhatToDo = service.getCollection("/IslandWhatToDo");
    this.islandWhereToStay = service.getCollection("/IslandWhereToStay");
    this.islandHowToGetThereDescription = service.getCollection("/IslandHowToGetThereDescription");
    this.islandHowToGetThereContent = service.getCollection("/IslandHowToGetThereContent");
  }
}
