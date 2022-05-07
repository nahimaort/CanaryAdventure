import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";
import {Router} from "@angular/router";

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
  introTitle: Observable<any>;

  constructor(service: DatabaseService, router: Router) {
    let basePath = "/Articles";
    this.articleSections = service.getCollection(basePath + router.url + "/Sections");
    this.articleRelatedSections = service.getCollection(basePath + router.url + "/RelatedSections");
    this.articleGallery = service.getCollection(basePath + router.url + "/Gallery");
    this.articleRelatedContent = service.getCollection(basePath + router.url + "/RelatedContent");
    this.introTitle = service.getDocument("/IntroBG", router.url);
  }

}
