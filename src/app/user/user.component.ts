import {Component, Inject, Injectable, LOCALE_ID} from '@angular/core';
import {UserService} from "./user.service";

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
  // username: string = 'saban';

  constructor( public user: UserService, @Inject(LOCALE_ID) public local: string ) {
    console.log(user, local)
    // this.username = user.name;
  }

  chgName() {
    this.user.name = 'peter müller';
  }


}
