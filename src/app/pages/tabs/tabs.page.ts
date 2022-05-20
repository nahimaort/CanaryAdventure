import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  id: string;

  constructor(private authService: AuthService, private toastController: ToastController) { }
  async ngOnInit() {
    await this.getId();
    console.log(this.id);
  }
  async getId() {
    await this.authService.getUserId().then(id => {
      this.id = id;
    });
  }
}
