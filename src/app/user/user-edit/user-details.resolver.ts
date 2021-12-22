import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {delay, Observable, of, tap, throwError} from 'rxjs';
import {UserService} from "../user.service";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<User> {

  constructor( private user: UserService ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    if ( route.paramMap.has('id') ) {
      const id = parseInt( route.paramMap.get('id')!, 10 );
      return this.user.getUserByID( id );
    }
    const err = new Error('ups');
    return throwError(() => err)
  }
}
