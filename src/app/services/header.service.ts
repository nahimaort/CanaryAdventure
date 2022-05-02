import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Injectable} from "@angular/core";
import {Destination, DropdownNavItem, HeaderNavItem, Language, Logo} from "../model/interfaces.model";
import {doc, getDoc} from "@angular/fire/firestore";

@Injectable({ providedIn: 'root' })
export class HeaderService {
  constructor(private db: AngularFirestore) {
  }

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
}
