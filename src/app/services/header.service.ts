import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Injectable} from "@angular/core";
import {Destination, Language} from "../model/interfaces.model";

@Injectable({ providedIn: 'root' })
export class HeaderService {
  constructor(private db: AngularFirestore) {
  }

  getAllDestinations() {
    return this.db.collection<Destination>('HeaderDestination').valueChanges();
  }

  getAllLanguages() {
    return this.db.collection<Language>('HeaderSiteLanguages').valueChanges();
  }
}
