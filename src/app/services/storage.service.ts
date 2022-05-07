import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }

  uploadToStorage(name: string, data: any) {
    return this.storage.upload(name, data);
  }

  public reference(name: string) {
    return this.storage.ref(name);
  }
}
