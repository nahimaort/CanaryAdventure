import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IslandComponent} from "./pages/island/island.component";
import {EventComponent} from "./pages/event/event.component";
import {ArticleComponent} from "./pages/article/article.component";

const routes: Routes = [
  { path: 'lanzarote', component: IslandComponent },
  { path: 'fuerteventura', component: IslandComponent },
  { path: 'gran-canaria', component: IslandComponent },
  { path: 'tenerife', component: IslandComponent },
  { path: 'la-palma', component: IslandComponent },
  { path: 'la-graciosa', component: IslandComponent },
  { path: 'el-hierro', component: IslandComponent },
  { path: 'la-gomera', component: IslandComponent },
  { path: 'event', component: EventComponent },
  { path: 'article', component: ArticleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
