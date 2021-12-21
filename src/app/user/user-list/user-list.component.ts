import { Component } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'itd-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent  {

  users: User[] = [
    {firstname: 'Saban', lastname: 'Ünlü'},
    {firstname: 'Heike', lastname: 'Müller'},
    {firstname: 'Petra', lastname: 'Mayer'},
  ]

  constructor() { }



}
