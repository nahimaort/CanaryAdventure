import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-related-article',
  templateUrl: './related-article.component.html',
  styleUrls: ['./related-article.component.css']
})
export class RelatedArticleComponent {
  @Input() relatedContent: Observable<any[]> | undefined;

  constructor() { }

}
