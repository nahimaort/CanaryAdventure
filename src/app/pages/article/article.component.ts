import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'article-page',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articleSections: Observable<any[]>;
  articleRelatedSections: Observable<any[]>;
  articleGallery: Observable<any[]>;
  articleRelatedContent: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.articleSections = service.getCollection("/ArticlePage/ArticleCollection/ArticleSections");
    this.articleRelatedSections = service.getCollection("/ArticlePage/ArticleCollection/ArticleRelatedSections");
    this.articleGallery = service.getCollection("/ArticlePage/ArticleCollection/ArticleGallery");
    this.articleRelatedContent = service.getCollection("/ArticlePage/ArticleCollection/ArticleRelatedContent");
  }

}
