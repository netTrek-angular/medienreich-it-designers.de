import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserAvatarComponent} from './user-avatar/user-avatar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import {UserService} from "./user.service";


@NgModule({
  declarations: [
    UserComponent,
    UserAvatarComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent,
    UserListComponent
  ],
  providers: [
  ]
})
export class UserModule { }
