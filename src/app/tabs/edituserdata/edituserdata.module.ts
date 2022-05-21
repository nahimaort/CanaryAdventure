import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdituserdataPageRoutingModule } from './edituserdata-routing.module';

import { EdituserdataPage } from './edituserdata.page';
import {ComponentsModule} from "../../pages/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EdituserdataPageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
  declarations: [EdituserdataPage]
})
export class EdituserdataPageModule {}
