import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  private userSub?: Subscription;

  constructor( public $user: UserService ) { }

  selectUser($event: User) {
    this.$user.selectUser ( $event );
  }

  ngOnInit(): void {

    this.userSub = this.$user.selectedUser
      .pipe(
        filter ( user => !!user /*user !== undefined*/ )
      )
      .subscribe( n => console.log ('aktueler benutzer', n) )
  }

  ngOnDestroy(): void {
    this.userSub!.unsubscribe();
  }
}
