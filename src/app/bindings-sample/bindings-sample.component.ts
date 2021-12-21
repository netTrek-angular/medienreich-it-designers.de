import {Component} from '@angular/core';

@Component({
  selector: 'itd-bindings-sample',
  templateUrl: './bindings-sample.component.html',
  styleUrls: ['./bindings-sample.component.scss']
})
export class BindingsSampleComponent {

  prop: string = 'ich bin eine Eigenschaft in der Klasse';
  netto: number = 100;

  imgFile = 'cat.jpeg';
  imgAlt = 'cat';
  imgAbsolutPath: string = 'https://placekitten.com/g/123/123';
  innerText: string = `Hello World`;
  innerHtml: string = `<strong>Hello </strong> World`;
  fontColor: string = 'red';
  bgColor: string = 'yellow';
  width: number = 50;
  selected?: number;
  classnames: string = 'my-content my-test';

  calcBrutto(val: number): number {
    return val * 1.19;
  }

  constructor() {
  }


  chgImg() {
    this.imgFile = 'smallCat.jpeg';
    this.imgAlt = 'small cat';
  }

  select(selected: number) {
    this.selected = selected;
  }
}
