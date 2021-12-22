import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
  users: User[] = [
    {firstname: 'Saban', lastname: 'Ünlü', age: 44},
    {firstname: 'Heike', lastname: 'Müller'},
    {firstname: 'Petra', lastname: 'Mayer'},
  ]
  */
  selectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );

  name = 'Saban Ünlü'; // lass ich drin wegen der alten Beispiel

  constructor( private http: HttpClient ) {
    console.log( 'user-service', http )
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>( environment.api.users );
  }

  getUserByID( id: number ): Observable<User> {
    return this.http.get<User>( `${environment.api.users}/${id}` );
  }

  createUser ( user: User ): Observable<User> {
    return this.http.post<User>( environment.api.users, user );
  }

  selectUser(user: User) {
    this.selectedUser.next( user === this.selectedUser.value ? undefined : user );
  }
}
