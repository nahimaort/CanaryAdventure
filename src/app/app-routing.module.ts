import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from "./pages/faq/faq.component";
import {WhattodoComponent} from "./pages/whattodo/whattodo.component";
import {IslandComponent} from "./pages/island/island.component";
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {NewsletterComponent} from "./components/newsletter/newsletter.component";
import {CommentSectionComponent} from "./components/comment-section/comment-section.component";

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'whattodo', component: WhattodoComponent },
  { path: 'island', component: IslandComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'comments', component: CommentSectionComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
