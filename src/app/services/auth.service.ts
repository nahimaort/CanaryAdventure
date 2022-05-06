import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  subscribeToNewsletter(user: User) {
    if (user.email != null) {
      this.auth.sendSignInLinkToEmail(user.email, {
        url: "https://canaryadventure-pwm.firebaseapp.com/__/auth/action?mode=action&oobCode=code",
        handleCodeInApp: true
      })
    }
  }

}
