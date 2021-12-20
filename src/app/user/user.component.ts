import {Component} from '@angular/core';

@Component({
  selector: 'itd-user',
  templateUrl: './user.component.html',
  // template: `<p><button>klick mich</button></p>`,
  styleUrls: ['./user.component.scss'],
  // styles: [
  //   `p {
  //     color: red;
  //   }`
  // ]
  // encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent  {
  username: string = 'saban';

  constructor() { }

  chgName() {
    this.username = 'peter';
  }
}
