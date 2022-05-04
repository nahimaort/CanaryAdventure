import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire/compat';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { IntroTitleComponent } from './intro-title/intro-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass);
  }
}