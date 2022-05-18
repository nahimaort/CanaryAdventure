import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAccountPageRoutingModule } from './signup-account-routing.module';

import { SignupAccountPage } from './signup-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAccountPageRoutingModule
  ],
  declarations: [SignupAccountPage]
})
export class SignupAccountPageModule {}
