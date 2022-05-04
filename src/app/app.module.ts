import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars, faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { environment } from "../environments/environment";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SectionsComponent } from './components/sections/sections.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RelatedComponent } from './components/related/related.component';
import { EventInformationComponent } from './components/event-information/event-information.component';
import { EventComponent } from './pages/event/event.component';
import { ArticleComponent } from './pages/article/article.component';
import { IslandComponent } from './pages/island/island.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    GalleryComponent,
    RelatedComponent,
    EventInformationComponent,
    EventComponent,
    ArticleComponent,
    IslandComponent
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
    library.addIcons(faMagnifyingGlass, faBars, faCalendarDay);
    library.addIcons(faYoutube, faFacebook, faInstagram, faTwitter);
  }
}
