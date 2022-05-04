import {Component, Input, OnInit} from '@angular/core';
import {RetrieveService} from "../../services/retrieve.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})

export class SectionsComponent {
  @Input() sections: Observable<any[]> | undefined;

  constructor() {

  }

}
