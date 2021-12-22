import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  delay,
  distinctUntilChanged,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  range, Subject,
  take,
  tap
} from "rxjs";
import {workspaceSchemaPath} from "@angular/cli/utilities/config";

@Component({
  selector: 'itd-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls: ['./rxjs-samples.component.scss']
})
export class RxjsSamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.initOfSample();
    // this.initRangeSample();
    // this.initIntervalSample()
    // this.initFromEventSample();
    // this.initSubSample();
    this.initBehSample();
    // this.initNewSample()
  }

  private initNewSample () {
    const observable: Observable<number> = new Observable( subscriber => {
      let count = 0;
      const id = window.setInterval(
        () => {
          count++;
          console.log( 'inner ', count );
          subscriber.next( count )
        }, 500
      )
      return () => window.clearInterval( id )
    })

    const subscription = this.subscribe(
      observable.pipe(
        take ( 3 )
      ), '#1 Own Observable ');
  }

  private initBehSample () {
    const observable: BehaviorSubject<number> = new BehaviorSubject<number>( 0 );
    const subscription = this.subscribe( observable, '#1 BehaviorSubject ');
    observable.next( 1 );
    observable.next( 2 );
    // observable.error( 'ups');
    subscription.unsubscribe();
    this.subscribe( observable, '#2 BehaviorSubject ');
    observable.next( 3 );
    console.log(observable.observed);
    observable.complete();
  }

  private initSubSample () {
    const observable: Subject<number> = new Subject<number>();
    this.subscribe( observable, '#1 subject ');
    observable.next( 1 );
    observable.next( 2 );
    // observable.error( 'ups');
    this.subscribe( observable, '#2 subject ');
    observable.next( 3 );
    observable.complete();
  }

  private initFromEventSample() {
    const observable: Observable<number> = fromEvent<MouseEvent>( document, 'mousemove').pipe(
      map ( mouseevent => mouseevent.clientY ),
      debounceTime ( 500 )
      // delay(500),
    );
    this.subscribe( observable, 'mouseevent' );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval( 500  ).pipe(
      tap ( next => console.log ( 'tap next 1', next )),
      map ( x => x * x ),
      tap ( next => console.log ( 'tap next 1', next )),
      take ( 5 )
    );
    const subscription = this.subscribe(observable, 'interval');
  }

  private initRangeSample() {
    const observable: Observable<number> = range(2, 3);
    const subscription = this.subscribe(observable, 'range');
  }

  private initOfSample() {
    const observable: Observable<number> = of( 1,2,3,4 );
    const subscription = this.subscribe(observable, '1#');
    const subscription2 = this.subscribe(observable, '2#');
  }

  private subscribe(observable: Observable<number>, msg: string = '') {
    return observable.subscribe(
      n => console.log('next ', msg, n),
      e => console.error('error ', msg, e),
      () => console.warn(msg, ' ich habe fertig')
    );
  }
}
