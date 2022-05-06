import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-form-control-alert',
  templateUrl: './form-control-alert.component.html',
  styleUrls: ['./form-control-alert.component.css']
})
export class FormControlAlertComponent implements OnInit {

  @Input() control?: AbstractControl | null;
  @Input() field: string | undefined;
  @Input() max: string | undefined;
  @Input() min: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
