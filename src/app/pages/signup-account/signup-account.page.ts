import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../model/interfaces.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signup-account',
  templateUrl: './signup-account.page.html',
  styleUrls: ['./signup-account.page.scss'],
})
export class SignupAccountPage implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params.user;
    });
  }

  storeData() {
    console.log(this.user);
  }
}
