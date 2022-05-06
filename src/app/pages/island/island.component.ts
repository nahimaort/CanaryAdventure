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
    this.islandDescription = service.getCollection("/IslandPage/IslandCollection/IslandDescription");
    this.islandWhatToDo = service.getCollection("/IslandPage/IslandCollection/IslandWhatToDo");
    this.islandWhereToStay = service.getCollection("/IslandPage/IslandCollection/IslandWhereToStay");
    this.islandHowToGetThereDescription = service.getCollection("/IslandPage/IslandCollection/IslandHowToGetThereDescription");
    this.islandHowToGetThereContent = service.getCollection("/IslandPage/IslandCollection/IslandHowToGetThereContent");
  }
}
