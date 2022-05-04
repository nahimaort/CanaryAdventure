import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  getCollection(path: string) {
    return this.db.collection(path).valueChanges();
  }

  createDocument(path: string, id: string, data: any) {
    return this.db.collection(path).doc(id).set(data);
  }

  registerUser(user: User) {
    return this.db.collection('Users').add;
  }

}
