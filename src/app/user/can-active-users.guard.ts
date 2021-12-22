import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {mapTo, Observable, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveUsersGuard implements CanActivate {
  constructor( private router: Router ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    // return timer( 100 ).pipe( mapTo ( true ) );
    // return this.router.parseUrl('/bindings');
  }

}
