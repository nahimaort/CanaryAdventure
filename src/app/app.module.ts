import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { FaqSearchbarComponent } from './components/faq-searchbar/faq-searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { FaqComponent } from './components/faq/faq.component';
import {RouterModule} from "@angular/router";
import { IslandComponent } from './components/island/island.component';
import { WhattodoComponent } from './components/whattodo/whattodo.component';
import { AboutComponent } from './components/about/about.component';
import { environment } from "../environments/environment";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SectionsComponent } from './components/sections/sections.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RelatedComponent } from './components/related/related.component';
import { EventInformationComponent } from './components/event-information/event-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqSearchbarComponent,
    SelectLanguageComponent,
    FaqComponent,
    IslandComponent,
    WhattodoComponent,
    AboutComponent,
    SectionsComponent,
    GalleryComponent,
    RelatedComponent,
    EventInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass, faBars);
    library.addIcons(faYoutube, faFacebook, faInstagram, faTwitter);
  }
}
