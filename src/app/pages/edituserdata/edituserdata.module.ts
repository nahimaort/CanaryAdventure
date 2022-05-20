import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdituserdataPageRoutingModule } from './edituserdata-routing.module';

import { EdituserdataPage } from './edituserdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdituserdataPageRoutingModule
  ],
  declarations: [EdituserdataPage]
})
export class EdituserdataPageModule {}
