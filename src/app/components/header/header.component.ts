import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HeaderService} from "../../services/header.service";
import {Destination, DropdownNavItem, HeaderNavItem, Language} from "../../model/interfaces.model";

@Component ({
  selector:'web-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  islandDestinations: Observable<Destination[]>;
  siteLanguages: Observable<Language[]>;
  headerNavItems: Observable<HeaderNavItem[]>;
  dropdownNavItems: Observable<DropdownNavItem[]>;

  constructor(private service: HeaderService) {
    this.islandDestinations = this.service.getAllDestinations();
    this.siteLanguages = this.service.getAllLanguages();
    this.headerNavItems = this.service.getAllHeaderNavItems();
    this.dropdownNavItems = this.service.getAllHeaderDropdownNavItems();
  }
}



