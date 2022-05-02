import { Component } from '@angular/core';
import { Router } from "@angular/router";

interface Destination {
  link: string;
  viewValue: string;
}

interface HeaderNavItem {
  link: string;
  viewValue: string;
}

interface DropdownNavItem {
  link: string;
  viewValue: string;
}

interface Language {
  viewValue: string;
}

@Component ({
  selector:'web-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
  islandDestinations : Destination[] = [
    {link: "/island", viewValue: 'Destination 1'},
    {link: "/island", viewValue: 'Destination 2'},
    {link: "/island", viewValue: 'Destination 3'},
    {link: "/island", viewValue: 'Destination 4'},
    {link: "/island", viewValue: 'Destination 5'},
    {link: "/island", viewValue: 'Destination 6'},
    {link: "/island", viewValue: 'Destination 7'},
    {link: "/island", viewValue: 'Destination 8'},
  ]

  siteLanguages : Language[] = [
    {viewValue: 'English'},
    {viewValue: 'Español'},
    {viewValue: 'Deutsch'},
    {viewValue: 'Français'},
  ]

  headerNavItems : HeaderNavItem[] = [
    {link: "/island", viewValue: 'Destinations'},
    {link: "/whattodo", viewValue: 'What to do'},
    {link: "/about", viewValue: 'About'},
    {link: "/faq", viewValue: 'FAQs'},
  ]

  dropdownNavItems : DropdownNavItem[] = [
    {link: "/whattodo", viewValue: 'What to do'},
    {link: "/about", viewValue: 'About'},
    {link: "/faq", viewValue: 'FAQs'},
  ]
}



