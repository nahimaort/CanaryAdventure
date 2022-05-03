import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {AboutService} from "../../services/about.service";
import {Observable} from "rxjs";
import {Section} from "../../model/interfaces.model";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutSections: Observable<Section[]>;

  constructor(private service: AboutService) {
    this.aboutSections = this.service.getAllAboutSections();
  }

  ngOnInit(): void {
  }

}
