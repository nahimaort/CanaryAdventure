import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaqComponent} from "./components/faq/faq.component";
import {WhattodoComponent} from "./components/whattodo/whattodo.component";
import {IslandComponent} from "./components/island/island.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'whattodo', component: WhattodoComponent },
  { path: 'island', component: IslandComponent },
  { path: 'about', component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
