import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent {
  @Input() data: Observable<any[]> | undefined;

  constructor() {

  }

}
