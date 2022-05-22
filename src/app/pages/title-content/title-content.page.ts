import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.page.html',
  styleUrls: ['./title-content.page.scss'],
})
export class TitleContentPage implements OnInit {

  @Input() data: Observable<any> | undefined;
  title: any;
  content: any;

  constructor() {

  }

  ngOnInit(): void {
    this.data.subscribe(val => {
      this.title = val.title;
      this.content = val.content;
    });
  }

}
