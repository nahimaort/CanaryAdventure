import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqSections: Observable<any[]>;
  faqIntroBG: Observable<unknown | undefined>;

  constructor(private service: DatabaseService) {
    this.faqIntroBG = this.service.getDocument('IntroBG', 'Faqs');
    this.faqSections = this.service.getCollection('FaqSections');
  }

  ngOnInit(): void {
  }

}
