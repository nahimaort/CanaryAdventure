import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from "./components/faq/faq.component";
import {WhattodoComponent} from "./components/whattodo/whattodo.component";
import {IslandComponent} from "./components/island/island.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'whattodo', component: WhattodoComponent },
  { path: 'island', component: IslandComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
