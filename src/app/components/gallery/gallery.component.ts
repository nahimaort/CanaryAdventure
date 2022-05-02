import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Image} from "../../models/interfaces.model";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  private imagesCollection: AngularFirestoreCollection<Image>;
  images: Image[] | undefined;

  constructor(private afs: AngularFirestore) {
    this.imagesCollection = afs.collection("EventImages");
    this.imagesCollection.valueChanges().subscribe(images => {
      this.images = images;
    });
  }


}
