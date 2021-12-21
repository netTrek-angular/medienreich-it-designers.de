import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerDirective } from './danger.directive';
import { TaxPipe } from './tax.pipe';



@NgModule({
  declarations: [
    DangerDirective,
    TaxPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DangerDirective,
    TaxPipe
  ]
})
export class UtilsModule { }
