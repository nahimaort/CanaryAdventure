import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-what-to-do',
  templateUrl: './island-what-to-do.component.html',
  styleUrls: ['./island-what-to-do.component.css']
})
export class IslandWhatToDoComponent {
  @Input() title: string | undefined;
  @Input() content: Observable<any> | undefined;

  constructor() {

  }

}
