import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-description',
  templateUrl: './island-description.component.html',
  styleUrls: ['./island-description.component.css']
})
export class IslandDescriptionComponent {
  @Input() description: Observable<any> | undefined;

  constructor() {

  }

}
