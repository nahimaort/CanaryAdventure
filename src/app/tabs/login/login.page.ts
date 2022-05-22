import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userAccountForm: FormGroup;

  constructor(private authService: AuthService, private loadingController: LoadingController,
              private alertController: AlertController, private navCtrl: NavController,
              private toastController: ToastController, private router: Router) {
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
  }
  async showLoginErrorAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });
    await alert.present();
  }
  async showToast(msg: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: msg,
      position: "top"
    });
    await toast.present();
  }

  async checkUserAccount() {
    const loading = await this.loadingController.create();
    await loading.present();
    let user;
    try {
      user = await this.authService.login(this.email.value, this.password.value);
    } catch (e) {
      user = null;
      await loading.dismiss();
      if (e.code === 'auth/user-not-found') {
        await this.showLoginErrorAlert('User not found', 'This email is not registered. Make sure you are registered before signing in.');
      }
      if (e.code === 'auth/wrong-password') {
        await this.showLoginErrorAlert('Wrong password', 'The password you have entered is incorrect.');
      }
      else {
        await this.showLoginErrorAlert('Unexpected error', 'An unexpected error while signing in has occurred.');
      }
    }
    if (user) {
      await this.showToast('Signed in succesfully');
      await loading.dismiss();
      await this.navCtrl.navigateForward('/tabs/home');
    }
  }
}
