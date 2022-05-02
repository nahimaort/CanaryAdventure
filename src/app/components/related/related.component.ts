import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Related} from "../../models/interfaces.model";

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent {
  private relatedCollection: AngularFirestoreCollection<Related>;
  related: Related[] | undefined;

  constructor(private afs: AngularFirestore) {
    this.relatedCollection = afs.collection("EventRelated");
    this.relatedCollection.valueChanges().subscribe(related => {
      this.related = related;
    });
  }


}
