import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsSampleComponent } from './bindings-sample.component';
import { CountdownComponent } from './countdown/countdown.component';



@NgModule({
  declarations: [
    BindingsSampleComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [

    BindingsSampleComponent,
     CountdownComponent
  ]
})
export class BindingsSampleModule { }
