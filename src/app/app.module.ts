import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import { BindingsSampleModule } from './bindings-sample/bindings-sample.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingsSampleModule,
    DirectiveSamplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
