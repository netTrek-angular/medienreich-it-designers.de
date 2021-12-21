import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsSampleComponent } from './bindings-sample.component';



@NgModule({
  declarations: [
    BindingsSampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [

    BindingsSampleComponent
  ]
})
export class BindingsSampleModule { }
