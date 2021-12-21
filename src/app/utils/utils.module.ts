import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerDirective } from './danger.directive';



@NgModule({
  declarations: [
    DangerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DangerDirective
  ]
})
export class UtilsModule { }
