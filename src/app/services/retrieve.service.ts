import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  constructor(private afs: AngularFirestore) { }

  getCollection(path: string) {
    return this.afs.collection(path).valueChanges();
  }

}
