import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ContactInformation, Section} from "../../model/interfaces.model";
import {RetrieveService} from "../../services/retrieve.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutSections: Observable<Section[]>;
  companyInformation: Observable<ContactInformation[]>;

  constructor(private service: RetrieveService) {
    this.aboutSections = this.service.getAllAboutSections();
    this.companyInformation = this.service.getCompanyContactInformation();
  }

  ngOnInit(): void {
  }

}
