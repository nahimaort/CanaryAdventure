import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FooterLink, FooterSocialMediaLink} from "../model/interfaces.model";

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private db: AngularFirestore) { }

  getAllFooterLinks() {
    return this.db.collection<FooterLink>('FooterLinks').valueChanges();
  }

  getAllFooterSocialMediaLinks() {
    return this.db.collection<FooterSocialMediaLink>('FooterSocialMediaLinks').valueChanges();
  }


}
