import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HeaderService} from "../../services/header.service";
import {Destination, DropdownNavItem, Language} from "../../model/interfaces.model";

@Component ({
  selector:'web-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  islandDestinations: Observable<Destination[]>;
  siteLanguages: Observable<Language[]>;

  constructor(private service: HeaderService) {
    this.islandDestinations = this.service.getAllDestinations();
    this.siteLanguages = this.service.getAllLanguages();
  }
  /*
  private islandDestinationsCollection: AngularFirestoreCollection<Destination>;
  islandDestinations : Observable<Destination[]>;
  private siteLanguagesCollection: AngularFirestoreCollection<Language>;
  siteLanguages : Observable<Language[]>;
  private headerNavItemCollection: AngularFirestoreCollection<HeaderNavItem>;
  headerNavItems : Observable<HeaderNavItem[]>;
   */

  /*
  constructor(private readonly afs: AngularFirestore) {
    this.islandDestinationsCollection = afs.collection<Destination>('HeaderDestination');
    this.islandDestinations = this.islandDestinationsCollection.valueChanges();
    this.siteLanguagesCollection = afs.collection<Destination>('HeaderSiteLanguages');
    this.siteLanguages = this.siteLanguagesCollection.valueChanges();
    this.headerNavItemCollection = afs.collection<HeaderNavItem>('HeaderNavItem');
    this.headerNavItems = this.headerNavItemCollection.valueChanges();
  }
   */

  dropdownNavItems : DropdownNavItem[] = [
    {link: "/whattodo", viewValue: 'What to do'},
    {link: "/about", viewValue: 'About'},
    {link: "/faq", viewValue: 'FAQs'},
  ]
}



