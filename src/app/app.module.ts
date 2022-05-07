import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faBars, faLocationDot, faAt, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube, faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './pages/faq/faq.component';
import {RouterModule} from "@angular/router";
import { IslandComponent } from './pages/island/island.component';
import { WhattodoComponent } from './pages/whattodo/whattodo.component';
import { AboutComponent } from './pages/about/about.component';
import { environment } from "../environments/environment";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionsComponent } from './components/sections/sections.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormControlAlertComponent } from './components/form-control-alert/form-control-alert.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { CommentComponent } from './components/comment/comment.component';
import { ImageDisplayDialogComponent } from './components/image-display-dialog/image-display-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignInDialogComponent } from './components/sign-in-dialog/sign-in-dialog.component';
import { CommentsExampleComponent } from './components/comments-example/comments-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    IslandComponent,
    WhattodoComponent,
    AboutComponent,
    LogoComponent,
    HomeComponent,
    SectionsComponent,
    ContactInformationComponent,
    NewsletterComponent,
    FormControlAlertComponent,
    CommentSectionComponent,
    CommentComponent,
    ImageDisplayDialogComponent,
    SignInDialogComponent,
    CommentsExampleComponent
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
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faMagnifyingGlass, faBars, faLocationDot, faAt, faPhone, faComments);
    library.addIcons(faYoutube, faFacebook, faInstagram, faTwitter, faFacebookF, faGoogle);
  }
}
