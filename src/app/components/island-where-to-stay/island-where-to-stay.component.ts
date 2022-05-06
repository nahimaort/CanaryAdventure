import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-where-to-stay',
  templateUrl: './island-where-to-stay.component.html',
  styleUrls: ['./island-where-to-stay.component.css']
})
export class IslandWhereToStayComponent {
  @Input() title: string | undefined;
  @Input() content: Observable<any> | undefined;

  constructor() {

  }
}
