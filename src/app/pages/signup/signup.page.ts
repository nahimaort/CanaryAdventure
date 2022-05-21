import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Observable} from 'rxjs';
import {UserData} from '../../model/interfaces.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoadingController, NavController, AlertController, ToastController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  countries: Observable<any[]>;
  newUserData: UserData = new UserData();
  userDataForm: FormGroup;
  private picture: any;

  constructor(private dbService: DatabaseService, private navCtrl: NavController, private loadingController: LoadingController,
              private authService: AuthService, private alertController: AlertController, private toastController: ToastController) {
    this.countries = this.dbService.getCollection('AvailableCountries');
    this.userDataForm = new FormGroup({
      // eslint-disable-next-line max-len
      firstName: new FormControl(this.newUserData.firstName, [Validators.required, Validators.maxLength(50), Validators.pattern('[A-Za-z]+')]),
      // eslint-disable-next-line max-len
      lastName: new FormControl(this.newUserData.lastName, [Validators.required, Validators.maxLength(50), Validators.pattern('^[A-Za-z]+$')]),
      country: new FormControl(this.newUserData.country, Validators.required),
      // eslint-disable-next-line max-len
      phone: new FormControl(this.newUserData.phone, [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
      // eslint-disable-next-line max-len
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$')]),
      // eslint-disable-next-line max-len
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
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

  get email() {
    return this.userDataForm.get('email');
  }

  get password() {
    return this.userDataForm.get('password');
  }

  ngOnInit() {
  }
  async showRegisterErrorAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async showToast(msg: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: msg,
    });
    await toast.present();
  }

  async saveUserData() {
    const loading = await this.loadingController.create();
    await loading.present();
    let user;
    try {
      user = await this.authService.signup(this.email.value, this.password.value);
    }
    catch(e) {
      user = null;
      await loading.dismiss();
      if (e.code === 'auth/email-already-in-use') {
        await this.showRegisterErrorAlert('Already registered', 'Another user with same email is already registered');
      }
      else {
        await this.showRegisterErrorAlert('Unexpected error', 'An unexpected error while registering has occurred');
      }
    }
    if (user) {
      const userUid = this.authService.getUserId();
      this.dbService.getDocument('AppImages', 'defaultProfilePic').subscribe(data => {
        // @ts-ignore
        this.picture = data.image;
      });
      await this.dbService.setDocument('UsersInfo', await userUid, {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        country: this.country.value,
        phone: this.phone.value,
        picture: this.picture
      });
      await this.navCtrl.navigateForward('/tabs/home');
      await this.showToast('Signed up succesfully');
      await loading.dismiss();
    }
  }
}
