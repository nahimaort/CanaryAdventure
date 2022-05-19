import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAccountPageRoutingModule } from './signup-account-routing.module';

import { SignupAccountPage } from './signup-account.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAccountPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [SignupAccountPage]
})
export class SignupAccountPageModule {}
