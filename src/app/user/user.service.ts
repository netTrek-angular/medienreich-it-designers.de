import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {firstname: 'Saban', lastname: 'Ünlü', age: 44},
    {firstname: 'Heike', lastname: 'Müller'},
    {firstname: 'Petra', lastname: 'Mayer'},
  ]
  selectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );

  name = 'Saban Ünlü'; // lass ich drin wegen der alten Beispiel

  constructor( ) {
    console.log( 'user-service')
  }

  selectUser(user: User) {
    this.selectedUser.next( user === this.selectedUser.value ? undefined : user );
  }
}
