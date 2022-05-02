import { Component } from '@angular/core';
import {FooterService} from "../../services/footer.service";
import {Observable} from "rxjs";
import {FooterLink, FooterSocialMediaLink} from "../../model/interfaces.model";

@Component ({
  selector:'web-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent {
  footerLinks: Observable<FooterLink[]>;
  footerSocialMediaLinks: Observable<FooterSocialMediaLink[]>;

  constructor(private service: FooterService) {
    this.footerLinks = this.service.getAllFooterLinks();
    this.footerSocialMediaLinks = this.service.getAllFooterSocialMediaLinks();
  }
}
