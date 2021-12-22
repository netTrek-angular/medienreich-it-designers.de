import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {BindingsSampleComponent} from "./bindings-sample/bindings-sample.component";
import {HomeComponent} from "./home/home.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {CanActiveUsersGuard} from "./user/can-active-users.guard";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent },
  {path: 'users', component: UserListComponent,
    canActivate: [
      CanActiveUsersGuard
    ],
    children: [
      {path: 'edit/:id', component: UserEditComponent }
    ]
  },
  {path: 'bindings', component: BindingsSampleComponent },
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
