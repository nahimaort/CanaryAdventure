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
    this.articleSections = service.getCollection("/ArticleSections");
    this.articleRelatedSections = service.getCollection("/ArticleRelatedSections");
    this.articleGallery = service.getCollection("/ArticleGallery");
    this.articleRelatedContent = service.getCollection("/ArticleRelatedContent");
  }


}
