import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-intro-title',
  templateUrl: './intro-title.page.html',
  styleUrls: ['./intro-title.page.scss'],
})
export class IntroTitlePage implements OnInit {

  @Input() data: Observable<any> | undefined;
  image: any;
  title: any;

  constructor() {

  }

  ngOnInit(): void {
    this.data.subscribe(val => {
      this.image = val.image;
      this.title = val.title;
    });
  }
}
