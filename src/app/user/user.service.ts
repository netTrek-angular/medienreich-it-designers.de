import { Injectable } from '@angular/core';
import {User} from "./user";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: BehaviorSubject<User[]|undefined> = new BehaviorSubject<User[] | undefined>( undefined );

  selectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>( undefined );

  name = 'Saban Ünlü'; // lass ich drin wegen der alten Beispiel

  constructor( private http: HttpClient ) {
    console.log( 'user-service', http );
    this.init ();
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>( environment.api.users ).pipe(
      tap ( users => this.users.next( users ) )
    );
  }

  getUserByID( id: number ): Observable<User> {
    return this.http.get<User>( `${environment.api.users}/${id}` );
  }

  createUser ( user: User ): Observable<User> {
    return this.http.post<User>( environment.api.users, user ).pipe(
      tap ( n => this.getUsers().subscribe() )
      // tap ( user => {
      //   this.users.next( [...this.users.value ?? [], user ] )
      // } )
    );
  }

  selectUser(user?: User) {
    this.selectedUser.next( user === this.selectedUser.value ? undefined : user );
  }

  private init() {
    this.getUsers().subscribe();
  }
}
