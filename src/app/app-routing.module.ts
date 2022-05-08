import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IslandComponent} from "./pages/island/island.component";
import {EventComponent} from "./pages/event/event.component";
import {ArticleComponent} from "./pages/article/article.component";
import {FaqComponent} from "./pages/faq/faq.component";
import {AboutComponent} from "./pages/about/about.component";
import {NewsletterComponent} from "./components/newsletter/newsletter.component";
import {CommentSectionComponent} from "./components/comment-section/comment-section.component";
import {CommentsExampleComponent} from "./components/comments-example/comments-example.component";
import { WhattodoComponent } from './pages/whattodo/whattodo.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: 'lanzarote', component: IslandComponent },
  { path: 'fuerteventura', component: IslandComponent },
  { path: 'gran-canaria', component: IslandComponent },
  { path: 'tenerife', component: IslandComponent },
  { path: 'la-palma', component: IslandComponent },
  { path: 'la-graciosa', component: IslandComponent },
  { path: 'el-hierro', component: IslandComponent },
  { path: 'la-gomera', component: IslandComponent },
  { path: 'CanaryIslandsWeather', component: ArticleComponent },
  { path: 'LanzaroteACaballo', component: ArticleComponent },
  { path: 'LanzaroteTour', component: ArticleComponent },
  { path: 'SurfCanteras', component: ArticleComponent },
  { path: 'VegetationLaPalma', component: ArticleComponent },
  { path: 'BikeDay', component: EventComponent },
  { path: 'Carnival', component: EventComponent },
  { path: 'Christmas', component: EventComponent },
  { path: 'Halloween', component: EventComponent },
  { path: 'SummerFest', component: EventComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'comments', component: CommentSectionComponent},
  { path: 'commentsExample', component: CommentsExampleComponent},
  { path: 'ScubaDive', component: CategoryComponent},
  { path: 'Paragliding', component: CategoryComponent},
  { path: 'CatamaranSailing', component: CategoryComponent},
  { path: 'Cruise', component: CategoryComponent},
  { path: 'Gastronomy', component: CategoryComponent},
  { path: 'JeepTour', component: CategoryComponent},
  { path: 'SunsetDolphins', component: CategoryComponent},
  { path: 'PirateAdventure', component: CategoryComponent},

  { path: 'whattodo', component: WhattodoComponent },
  { path: 'home', component: HomeComponent},
  { path: 'ScubaDive', component: CategoryComponent},
  { path: 'Paragliding', component: CategoryComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
