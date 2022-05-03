import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Destination, Section} from "../model/interfaces.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private db: AngularFirestore) { }

  getAllAboutSections() {
    return this.db.collection<Section>('AboutSectionContent').valueChanges();
  }
}
