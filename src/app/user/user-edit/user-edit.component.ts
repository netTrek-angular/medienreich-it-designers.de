import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {delay, filter, map, Subscription, switchMap, tap} from "rxjs";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'itd-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {

  private readonly sub = new Subscription();

  currentIndex?: number;
  currentUser?: User;

  constructor( private route: ActivatedRoute, private user: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.sub.add(
      this.route.paramMap
        .pipe(
          map ( (pMap: ParamMap) => parseInt( pMap.get( 'id' ) ?? '0' , 10 ) ),
          filter ( id => id > 0 ),
          tap ( index => this.currentIndex = index ),
          // delay ( 5000 ), // simulation langsam antwortend
          switchMap ( id => this.user.getUserByID( id ) )
        )
        .subscribe( usr => this.currentUser = usr )
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // back() {
  //   this.user.selectUser( undefined );
  //   this.router.navigate( ['/users'] );
  // }

}
