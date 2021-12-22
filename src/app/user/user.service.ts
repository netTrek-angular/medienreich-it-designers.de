import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = 'Saban Ünlü';

  constructor( ) {
    console.log( 'user-service')
  }
}
