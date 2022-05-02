import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {Observable} from "rxjs";
import {Logo} from "../../model/interfaces.model";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logoInfo: Observable<Logo[]>;

  constructor(private service: HeaderService) {
    this.logoInfo = this.service.getLogo();
  }

  ngOnInit(): void {
  }

}
