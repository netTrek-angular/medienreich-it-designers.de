import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2} from '@angular/core';

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

  constructor( elemRef: ElementRef, private renderer: Renderer2 ) {
    // console.log( 'danger directive generated', elemRef )
    // renderer verwenden, um sicher zu gehen das man auf universal (SSR) umstellen könnte
    this.renderer.setStyle( elemRef.nativeElement, 'color', 'yellow');
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
