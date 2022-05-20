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

  async setDocument(path: string, id: string, data: any) {
    return this.db.collection(path).doc(id).set(data);
  }
}
