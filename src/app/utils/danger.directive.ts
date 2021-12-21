import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: 'button[itdDanger]'
})
export class DangerDirective {

  @HostBinding( 'style.backgroundColor')
  backgroundColor = 'red';

  @HostBinding( 'style.padding')
  padding = '10px';

  @Output()
  confirmed: EventEmitter<undefined> = new EventEmitter<undefined>();

  @Input()
  itdDanger = ''

  constructor( /*elemRef: ElementRef*/ ) {
    // console.log( 'danger directive generated', elemRef )
  }

  @HostListener('click')
  btnClickHandler () {

    if ( confirm ( this.itdDanger === '' ? 'willst du das wirklich' : this.itdDanger ) ) {
      // console.log('bestätigt')
      this.confirmed.emit();
    } /*else {
      console.log('abgebrochen')
    }*/
  }

}
