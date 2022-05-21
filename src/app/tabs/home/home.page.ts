import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  homeIntroBG: Observable<any>
  homeCatTxt: Observable<any>;
  homeGalleryData: Observable<any[]>;

  constructor(private service: DatabaseService) {
    this.homeIntroBG = this.service.getDocument('IntroBG', 'Home');
    this.homeCatTxt = this.service.getDocument('Home', 'discover');
    this.homeGalleryData = this.service.getCollection('HomeCategories');
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }
}
