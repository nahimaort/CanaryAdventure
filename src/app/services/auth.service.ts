import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {first} from "rxjs";
import firebase from "firebase/compat/app";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedInSuccesfully: boolean | undefined;

  constructor(private auth: AngularFireAuth) { }

  isLoggedIn() {
    return this.auth.authState.pipe(first()).toPromise();
  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }

  TwitterAuth() {
    return this.AuthLogin(new TwitterAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.auth.signInWithPopup(provider).then((userCredential) => {
        this.loggedInSuccesfully = true;
      })
      .catch((error) => {
        this.loggedInSuccesfully = false;
      });
  }
}
