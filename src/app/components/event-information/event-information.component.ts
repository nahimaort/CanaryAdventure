import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {EventInformation} from "../../models/interfaces.model";


@Component({
  selector: 'app-event-information',
  templateUrl: './event-information.component.html',
  styleUrls: ['./event-information.component.css']
})
export class EventInformationComponent {
  private informationCollection: AngularFirestoreCollection<EventInformation>;
  information: EventInformation[] | undefined;

  constructor(private afs: AngularFirestore) {
    this.informationCollection = afs.collection("EventInformation");
    this.informationCollection.valueChanges().subscribe(information => {
      this.information = information;
    });
  }

}
