import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, skipWhile, tap} from 'rxjs';
import {AppLoadingService} from "./app-loading.service";

@Injectable()
export class AppLoadingInterceptor implements HttpInterceptor {

  constructor( private loading: AppLoadingService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loading.increment();
    return next.handle(request).pipe(
      skipWhile ( event => !(event instanceof HttpResponse) ),
      tap ( {
        next: next => this.loading.decrement(),
        error: err => this.loading.decrement()
      } )
    );
  }


}
