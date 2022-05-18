import { NgModule } from '@angular/core';
import {FormControlAlertComponent} from './form-control-alert/form-control-alert.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [FormControlAlertComponent],
  exports: [FormControlAlertComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {}
