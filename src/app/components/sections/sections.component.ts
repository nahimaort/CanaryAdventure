import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Section} from "../../models/interfaces.model";


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent {
  private sectionsCollection: AngularFirestoreCollection<Section>;
  sections: Section[] | undefined;

  constructor(private afs: AngularFirestore) {
    this.sectionsCollection = afs.collection("EventSections");
    this.sectionsCollection.valueChanges().subscribe(sections => {
      this.sections = sections;
    });
  }

}
