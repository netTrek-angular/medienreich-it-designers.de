import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserAvatarComponent} from './user-avatar/user-avatar.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserListItemComponent} from './user-list/user-list-item/user-list-item.component';
import {HttpClientModule} from "@angular/common/http";
import { UserEditComponent } from './user-edit/user-edit.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UserComponent,
    UserAvatarComponent,
    UserListComponent,
    UserListItemComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    UserComponent,
    UserListComponent
  ],
  providers: [
  ]
})
export class UserModule { }
