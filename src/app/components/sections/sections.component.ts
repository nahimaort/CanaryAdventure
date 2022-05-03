import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Destination, Section} from "../../model/interfaces.model";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  @Input() data: Observable<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
