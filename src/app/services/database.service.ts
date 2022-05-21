import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  getCollection(path: string) {
    return this.db.collection(path).valueChanges();
  }

  getDocument(path: string, docID: string) {
    return this.db.collection(path).doc(docID).valueChanges();
  }

  updateDocument(path: string, docID: string, data: any) {
    return this.db.collection(path).doc(docID).update(data);
  }

  setDocument(path: string, id: string, data: any) {
    return this.db.collection(path).doc(id).set(data);
  }
}
