import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IslandComponent} from "./pages/island/island.component";

const routes: Routes = [
  { path: 'island', component: IslandComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
