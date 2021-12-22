import { Injectable } from '@angular/core';
import {BehaviorSubject, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppLoadingService {

  loading$ = new BehaviorSubject(0);

  constructor() { }

  increment() {
    this.loading$.next( this.loading$.value + 1 );
  }

  decrement() {
    timer (250 ).subscribe(
      _ => this.loading$.next( this.loading$.value - 1 )
    );
  }
}
