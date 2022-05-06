import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars, faCalendarDay, faLocation, faCar, faBus, faPlane, faShip, faShareNodes} from '@fortawesome/free-solid-svg-icons';
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
import { RelatedEventComponent } from './components/related-event/related-event.component';
import { EventInformationComponent } from './components/event-information/event-information.component';
import { EventComponent } from './pages/event/event.component';
import { ArticleComponent } from './pages/article/article.component';
import { IslandComponent } from './pages/island/island.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { RelatedArticleComponent } from './components/related-article/related-article.component';
import { IslandDescriptionComponent } from './components/island-description/island-description.component';
import { IslandWhatToDoComponent } from './components/island-what-to-do/island-what-to-do.component';
import { IslandWhereToStayComponent } from './components/island-where-to-stay/island-where-to-stay.component';
import { IslandHowToGetThereComponent } from './components/island-how-to-get-there/island-how-to-get-there.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionsComponent,
    GalleryComponent,
    RelatedEventComponent,
    EventInformationComponent,
    EventComponent,
    ArticleComponent,
    IslandComponent,
    RelatedArticleComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    IslandDescriptionComponent,
    IslandWhatToDoComponent,
    IslandWhereToStayComponent,
    IslandHowToGetThereComponent
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
    library.addIcons(faMagnifyingGlass, faBars, faCalendarDay, faLocation, faCar, faBus, faPlane, faShip, faShareNodes);
    library.addIcons(faYoutube, faFacebook, faInstagram, faTwitter);
  }
}
