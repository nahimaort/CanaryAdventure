import { Component } from '@angular/core';
import {RetrieveService} from "../../services/retrieve.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  images: Observable<any[]>;

  constructor(private service: RetrieveService) {
    this.images = service.getCollection("/EventImages");
  }


}
