import { Component } from '@angular/core';
import {DatabaseService} from "./services/database.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "PWM-Sprint3-Nahima";
  document: Observable<any>;

  constructor(private service: DatabaseService) {
    this.document = service.getDoc("ArticleSections", "gV7WqGzPCJJ3nbeC42TG");
  }
}

