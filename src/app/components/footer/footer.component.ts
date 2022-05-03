import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {FooterLink, FooterSocialMediaLink} from "../../model/interfaces.model";
import {RetrieveService} from "../../services/retrieve.service";

@Component ({
  selector:'web-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent {
  footerLinks: Observable<FooterLink[]>;
  footerSocialMediaLinks: Observable<FooterSocialMediaLink[]>;

  constructor(private service: RetrieveService) {
    this.footerLinks = this.service.getAllFooterLinks();
    this.footerSocialMediaLinks = this.service.getAllFooterSocialMediaLinks();
  }
}
