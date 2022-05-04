import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../../services/database.service";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
  userForm = new FormGroup({
    firstName: new FormControl(this.newUser.firstName, [Validators.required, Validators.maxLength(50), Validators.pattern("[A-Za-z]+")]),
    lastName: new FormControl(this.newUser.lastName, [Validators.required, Validators.maxLength(50), Validators.pattern("^[A-Za-z]+$")]),
    email: new FormControl(this.newUser.email, [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$")]),
    language: new FormControl(this.newUser.language, Validators.required)
  });

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get language() {
    return this.userForm.get('language');
  }

  constructor(private service: DatabaseService) {
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
