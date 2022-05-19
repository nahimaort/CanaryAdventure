import {Component, Input, OnInit} from '@angular/core';
import {UserData} from '../../model/interfaces.model';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-account',
  templateUrl: './signup-account.page.html',
  styleUrls: ['./signup-account.page.scss'],
})
export class SignupAccountPage implements OnInit {
  user: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  userAccountForm: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.userAccountForm = new FormGroup({
      // eslint-disable-next-line max-len
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')]),
      // eslint-disable-next-line max-len
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.userAccountForm.get('email');
  }

  get password() {
    return this.userAccountForm.get('password');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params.user;
    });
  }

  saveUserData() {

  }
}
