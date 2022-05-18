import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Observable} from 'rxjs';
import {UserData} from '../../model/interfaces.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  countries: Observable<any[]>;
  newUserData: UserData = new UserData();
  userDataForm: FormGroup;

  constructor(private service: DatabaseService) {
    this.countries = this.service.getCollection('AvailableCountries');
    this.userDataForm = new FormGroup({
      // eslint-disable-next-line max-len
      firstName: new FormControl(this.newUserData.firstName, [Validators.required, Validators.maxLength(50), Validators.pattern('[A-Za-z]+')]),
      // eslint-disable-next-line max-len
      lastName: new FormControl(this.newUserData.lastName, [Validators.required, Validators.maxLength(50), Validators.pattern('^[A-Za-z]+$')]),
      country: new FormControl(this.newUserData.country, Validators.required),
      // eslint-disable-next-line max-len
      phone: new FormControl(this.newUserData.phone, [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')])
    });
  }

  get firstName() {
    return this.userDataForm.get('firstName');
  }

  get lastName() {
    return this.userDataForm.get('lastName');
  }

  get country() {
    return this.userDataForm.get('country');
  }

  get phone() {
    return this.userDataForm.get('phone');
  }

  ngOnInit() {
  }

  saveUserData() {
    console.log(this.newUserData);
  }
}
