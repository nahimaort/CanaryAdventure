import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {
  ContactInformation,
  Destination,
  DropdownNavItem,
  FooterLink,
  FooterSocialMediaLink,
  HeaderNavItem,
  Language,
  Logo, Section
} from "../model/interfaces.model";

@Injectable({
  providedIn: 'root'
})
export class RetrieveService {

  constructor(private db: AngularFirestore) { }

  /* Header */
  getAllDestinations() {
    return this.db.collection<Destination>('HeaderDestination').valueChanges();
  }

  getAllHeaderNavItems() {
    return this.db.collection<HeaderNavItem>('HeaderNavItems').valueChanges();
  }

  getAllHeaderDropdownNavItems() {
    return this.db.collection<DropdownNavItem>('HeaderDropdownNavItem').valueChanges();
  }

  getAllLanguages() {
    return this.db.collection<Language>('HeaderSiteLanguages').valueChanges();
  }

  getLogo() {
    return this.db.collection<Logo>('SiteLogo').valueChanges();
  }

  /* Footer */
  getAllFooterLinks() {
    return this.db.collection<FooterLink>('FooterLinks').valueChanges();
  }

  getAllFooterSocialMediaLinks() {
    return this.db.collection<FooterSocialMediaLink>('FooterSocialMediaLinks').valueChanges();
  }

  /* About */
  getAllAboutSections() {
    return this.db.collection<Section>('AboutSectionContent').valueChanges();
  }

  getCompanyContactInformation() {
    return this.db.collection<ContactInformation>('CompanyContactInformation').valueChanges();
  }

}
