import { Component, OnInit } from '@angular/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  languages : Language[] = [
    {value: 'english', viewValue: 'English'},
    {value: 'spanish', viewValue: 'Español'},
    {value: 'german', viewValue: 'Deutsch'},
    {value: 'french', viewValue: 'Français'}
  ]
}
