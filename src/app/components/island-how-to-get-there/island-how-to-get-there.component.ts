import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-island-how-to-get-there',
  templateUrl: './island-how-to-get-there.component.html',
  styleUrls: ['./island-how-to-get-there.component.css']
})
export class IslandHowToGetThereComponent {
  @Input() title: string | undefined;
  @Input() description: Observable<any> | undefined;
  @Input() content: Observable<any> | undefined;

  constructor() { }

}
