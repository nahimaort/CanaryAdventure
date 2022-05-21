import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdituserdataPage } from './edituserdata.page';

const routes: Routes = [
  {
    path: '',
    component: EdituserdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdituserdataPageRoutingModule {}
