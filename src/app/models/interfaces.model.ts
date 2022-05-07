import {IconName} from "@fortawesome/free-solid-svg-icons";

export interface Destination {
  link: string;
  viewValue: string;
}

export interface Logo {
  link: string;
  image: string;
}

export interface Language {
  viewValue: string;
  value: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface ContactInformation {
  title: string;
  content: string[];
  image: string;
  location: string;
  email: string;
  phone: string;
}

export class UserComment {
  title?: string;
  content?: string;
  images?: string[];
}
