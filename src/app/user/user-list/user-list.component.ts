import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {filter, Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, OnDestroy {

  private userSub?: Subscription;

  // users$: Observable<User[]> = this.$user.getUsers();

  constructor( public $user: UserService, private router: Router ) { }

  selectUser($event: User) {
    this.$user.selectUser ( $event );
  }

  ngOnInit(): void {

    this.userSub = this.$user.selectedUser
      .pipe(
        filter ( user => !!user /*user !== undefined*/ )
      ).subscribe(
        user => {
          this.router.navigate( ['users', 'edit', user!.id ] );
          // this.$user.getUserByID( user!.id! ).subscribe(
          //   console.log
          // );
        }
      )
      // .subscribe( n => console.log ('aktueler benutzer', n) )
  }

  ngOnDestroy(): void {
    this.userSub!.unsubscribe();
  }

  createNewUsr() {
    this.$user.createUser( {
      firstname: 'Saban', lastname: 'Ünlü'
    }).subscribe(
      console.log
    )
  }
}
