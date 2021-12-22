import { Component } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent  {

  constructor( public $user: UserService ) { }

  selectUser($event: User) {
    this.$user.selectUser ( $event );
  }
}
