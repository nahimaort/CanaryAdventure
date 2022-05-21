import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {DatabaseService} from '../../services/database.service';
import {AuthService} from '../../services/auth.service';
import {UserData} from '../../model/interfaces.model';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-edituserdata',
  templateUrl: './edituserdata.page.html',
  styleUrls: ['./edituserdata.page.scss'],
})
export class EdituserdataPage implements OnInit {
  countries: Observable<any[]>;
  userEditDataForm: FormGroup;
  userData: UserData = new UserData();
  imageName: string;
  private id: string;
  private url: any;
  private image: any;

  constructor(private dbService: DatabaseService, private authService: AuthService,
              private loadingController: LoadingController, private toastController: ToastController,
              private alertController: AlertController, private storageService: StorageService) {
    this.countries = this.dbService.getCollection('AvailableCountries');
    this.userEditDataForm = new FormGroup({
      // eslint-disable-next-line max-len
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('[A-Za-z]+')]),
      // eslint-disable-next-line max-len
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^[A-Za-z]+$')]),
      country: new FormControl('', Validators.required),
      // eslint-disable-next-line max-len
      phone: new FormControl('', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
    });
  }
  get firstName() {
    return this.userEditDataForm.get('firstName');
  }
  get lastName() {
    return this.userEditDataForm.get('lastName');
  }
  get country() {
    return this.userEditDataForm.get('country');
  }
  get phone() {
    return this.userEditDataForm.get('phone');
  }
  async getId() {
    await this.authService.getUserId().then(id => {
      this.id = id;
    });
  }

  async getCurrentUserData() {
    this.dbService.getDocument('UsersInfo', this.id).subscribe(data => {
      // @ts-ignore
      this.userData.firstName = data.firstName;
      // @ts-ignore
      this.userData.lastName = data.lastName;
      // @ts-ignore
      this.userData.country = data.country;
      // @ts-ignore
      this.userData.phone = data.phone;
      // @ts-ignore
      this.userData.picture = data.picture;
    });
  }

  async ngOnInit() {
    await this.getId();
    await this.getCurrentUserData();
  }
  async showToast(msg: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: msg,
    });
    await toast.present();
  }
  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async saveNewUserData() {
    this.userData.firstName = this.firstName.value;
    this.userData.lastName = this.lastName.value;
    this.userData.country = this.country.value;
    this.userData.phone = this.phone.value;
    const loading = await this.loadingController.create({
      message: 'Saving',
    });
    await loading.present();
    try {
      await this.dbService.updateDocument('UsersInfo', this.id, {
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        country: this.userData.country,
        phone: this.userData.phone
      });
    } catch (e) {
      this.showAlert('Unexpected error', 'An unexpected error has occurred');
    }

    await loading.dismiss();
    await this.showToast('Changes saved succesfully');
  }

  /*
  async uploadNewProfilePic(image: string) {
    const loading = await this.loadingController.create({
      message: 'Saving picture',
    });
    await loading.present();
    console.log(image);
    this.storageImageName = Math.random() + image;
    await this.storageService.uploadToStorage('ProfilePictures/' + this.storageImageName, image);
    const reference = this.storageService.reference('ProfilePictures/' + this.storageImageName);
    await reference;
    reference.getDownloadURL().subscribe(async url => {
      this.url = await url;
    });
    try {
      await this.dbService.updateDocument('UsersInfo', this.id, {
        picture: this.url
      });
      await loading.dismiss();
      await this.showToast('New profile picture saved succesfully');
    } catch (e) {
      await loading.dismiss();
      this.showAlert('Unexpected error', 'An unexpected error has occurred');
    }
  }
   */

  /*
  imageUploaded(event) {
    if (event.target.files.length > 0) {
        this.imageName = event.target.files[0].name;
    }
    this.uploadNewProfilePic(this.imageName);
  }
   */

  imageUploaded(event) {
    if (event.target.files.length > 0) {
      this.imageName = event.target.files[0].name;
      this.image = event.target.files[0];
      this.uploadImage();
    }
  }

  private async uploadImage() {
    const loading = await this.loadingController.create({
      message: 'Saving picture',
    });
    await loading.present();
    this.imageName = 'ProfilePictures/' + Math.random() + this.imageName;
    console.log(this.image);
    const upload = this.storageService.uploadToStorage(this.imageName, this.image);
    await upload;
    const reference = this.storageService.reference(this.imageName);
    await reference;

    await reference.getDownloadURL().subscribe(async url => {
      this.url = await url;
      await loading.dismiss();
      await this.updateProfilePicture();
    });
  }

  private async updateProfilePicture() {
    try {
      await this.dbService.updateDocument('UsersInfo', this.id, {
        picture: this.url
      });
      await this.showToast('New profile picture saved succesfully');
    } catch (e) {
      await this.showAlert('Unexpected error', 'An unexpected error has occurred');
    }
  }
}
