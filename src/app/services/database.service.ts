import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore, private x: AngularFirestoreDocument) {

  }

  getCollection(path: string) {
    return this.db.collection(path).valueChanges();

  }

  getDocument(path: string, docID: string) {
    return this.db.collection(path).doc(docID).valueChanges();
  }

  async setDocument(path: string, id: string, data: any) {
    return this.db.collection(path).doc(id).set(data);
  }

}
