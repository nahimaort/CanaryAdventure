import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

export interface Destination {
  link: string;
  viewValue: string;
}

interface HeaderNavItem {
  link: string;
  viewValue: string;
}

interface DropdownNavItem {
  link: string;
  viewValue: string;
}

interface Language {
  viewValue: string;
}

@Component ({
  selector:'web-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  private islandDestinationsCollection: AngularFirestoreCollection<Destination>;
  islandDestinations : Observable<Destination[]>;
  private siteLanguagesCollection: AngularFirestoreCollection<Language>;
  siteLanguages : Observable<Language[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.islandDestinationsCollection = afs.collection<Destination>('HeaderDestination');
    this.islandDestinations = this.islandDestinationsCollection.valueChanges();
    this.siteLanguagesCollection = afs.collection<Destination>('HeaderSiteLanguages');
    this.siteLanguages = this.siteLanguagesCollection.valueChanges();
  }

  headerNavItems : HeaderNavItem[] = [
    {link: "/island", viewValue: 'Destinations'},
    {link: "/whattodo", viewValue: 'What to do'},
    {link: "/about", viewValue: 'About'},
    {link: "/faq", viewValue: 'FAQs'},
  ]

  dropdownNavItems : DropdownNavItem[] = [
    {link: "/whattodo", viewValue: 'What to do'},
    {link: "/about", viewValue: 'About'},
    {link: "/faq", viewValue: 'FAQs'},
  ]
}



