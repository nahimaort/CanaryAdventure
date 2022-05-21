import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import {FavouritesPageModule} from '../favourites/favourites.module';
import {EdituserdataPageModule} from '../edituserdata/edituserdata.module';
import {HomePageModule} from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    FavouritesPageModule,
    EdituserdataPageModule,
    HomePageModule
  ],
  exports: [
    TabsPage
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
