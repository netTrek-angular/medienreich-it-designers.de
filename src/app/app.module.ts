import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from "./user/user.module";
import { BindingsSampleModule } from './bindings-sample/bindings-sample.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';
import {UtilsModule} from "./utils/utils.module";
import {PipeSampleModule} from "./pipe-sample/pipe-sample.module";

// Einbinden der deutschen locales für Pipes
import '@angular/common/locales/global/de';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AppLoadingInterceptor} from "./app-loading.interceptor";
import {AppAuthInterceptor} from "./app-auth.interceptor";

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
    UtilsModule,
    PipeSampleModule,
    RxjsSamplesModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'de' // standard Pipe-Sprache der Anwendung
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AppLoadingInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: AppAuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
