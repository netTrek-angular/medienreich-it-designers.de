import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserAvatarComponent} from './user-avatar/user-avatar.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserListItemComponent} from './user-list/user-list-item/user-list-item.component';
import {HttpClientModule} from "@angular/common/http";
import { UserEditComponent } from './user-edit/user-edit.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


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
    RouterModule,
    FormsModule
  ],
  exports: [
    UserComponent,
    UserListComponent
  ],
  providers: [
  ]
})
export class UserModule { }
