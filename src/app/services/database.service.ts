import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../model/user.model";
import {collection, query} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import {UserComment} from "../model/interfaces.model";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private userSubscribed: boolean | undefined;

  constructor(private db: AngularFirestore) { }

  getCollection(path: string) {
    return this.db.collection(path).valueChanges();
  }

  createDocument(path: string, id: string, data: any) {
    return this.db.collection(path).doc(id).set(data);
  }

  subscribeUser(user: User) {
    return this.db.collection('NewsletterSubscribers').add({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      language: user.language
    });
  }

  uploadComment(comment: UserComment, collection: string) {
    return this.db.collection(collection).add({
      title: comment.title,
      content: comment.content,
      images: comment.images
    })
  }

  async userIsAlreadySubscribed(user: User): Promise<any> {
    const query = this.db.collection('NewsletterSubscribers').ref.where('email', '==', user.email);
    await query.get().then(result => {
      this.userSubscribed = !result.empty;
    });
    return this.userSubscribed;
  }
}
