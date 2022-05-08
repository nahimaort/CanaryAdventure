import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass, faBars, faCar, faBus, faPlane, faShip, faAt, faLocationDot, faComments} from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faFacebook, faTwitter, faYoutube, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
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
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
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
import { IntroTitleComponent } from './components/intro-title/intro-title.component';

import { WhattodoComponent } from './pages/whattodo/whattodo.component';
import { HomeComponent } from './pages/home/home.component';
import { BlockGalleryComponent } from './components/block-gallery/block-gallery.component';
import { CategoryComponent } from './pages/category/category.component';
import { ColImg50txt50Component } from './components/col-img50txt50/col-img50txt50.component';
import { TitleContentComponent } from './components/title-content/title-content.component';




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
    IslandHowToGetThereComponent,
    FaqComponent,
    IslandComponent,
    AboutComponent,
    LogoComponent,
    SectionsComponent,
    ContactInformationComponent,
    NewsletterComponent,
    FormControlAlertComponent,
    CommentSectionComponent,
    CommentComponent,
    ImageDisplayDialogComponent,
    SignInDialogComponent,
    CommentsExampleComponent,
    IntroTitleComponent,

    WhattodoComponent,
    HomeComponent,
    BlockGalleryComponent,
    CategoryComponent,
    ColImg50txt50Component,
    TitleContentComponent
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
    AngularFirestoreModule,
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
    library.addIcons(faMagnifyingGlass, faBars, faCar, faBus, faPlane, faShip, faLocationDot, faAt, faComments);
    library.addIcons(faYoutube, faFacebook, faInstagram, faTwitter, faFacebookF, faGoogle);
  }
}
