import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsletterSections: Observable<any[]>;
  siteLanguages: Observable<any[]>;
  newUser: User = new User();
  userForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    language: ''
  });

  constructor(private service: DatabaseService,
              private formBuilder: FormBuilder) {
    this.newsletterSections = this.service.getCollection('NewsletterSections');
    this.siteLanguages = this.service.getCollection('HeaderSiteLanguages');
  }

  ngOnInit(): void {
  }

  registerUser(user: User): void {
    console.log(user);
    this.userForm.reset();
  }
}
