import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveSamplesComponent } from './directive-samples.component';
import {UtilsModule} from "../utils/utils.module";



@NgModule({
  declarations: [
    DirectiveSamplesComponent
  ],
    imports: [
        CommonModule,
        UtilsModule
    ],
  exports: [
    DirectiveSamplesComponent
  ]
})
export class DirectiveSamplesModule { }
