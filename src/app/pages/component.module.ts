import { NgModule } from '@angular/core';
import {FormControlAlertComponent} from './form-control-alert/form-control-alert.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [FormControlAlertComponent],
  exports: [FormControlAlertComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {}
