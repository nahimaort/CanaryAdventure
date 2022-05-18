import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupAccountPage } from './signup-account.page';

const routes: Routes = [
  {
    path: '',
    component: SignupAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupAccountPageRoutingModule {}
