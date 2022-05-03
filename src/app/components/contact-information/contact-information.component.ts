import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ContactInformation} from "../../model/interfaces.model";

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  @Input() data: Observable<any> | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

}
