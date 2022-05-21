import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  id: string;

  constructor(private authService: AuthService) { }
  async ngOnInit() {
    await this.getId();
  }
  async getId() {
    await this.authService.getUserId().then(id => {
      this.id = id;
    });
  }
}
