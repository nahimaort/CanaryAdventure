import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";
import {UserComment} from "../../model/interfaces.model";

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  commentsExample: Observable<UserComment[]>;

  constructor(private service: DatabaseService) {
    // @ts-ignore
    this.commentsExample = this.service.getCollection<UserComment>('CommentsExample');
  }

  ngOnInit(): void {
  }
}
