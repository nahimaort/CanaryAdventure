import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { FaqSearchbarComponent } from './faq-searchbar/faq-searchbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { FaqComponent } from './faq/faq.component';
import {RouterModule} from "@angular/router";
import { IslandComponent } from './island/island.component';
import { WhattodoComponent } from './whattodo/whattodo.component';
import { AboutComponent } from './about/about.component';
import { environment } from "../environments/environment";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

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
    AboutComponent
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
    AngularFireDatabaseModule
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
