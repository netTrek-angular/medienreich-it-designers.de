import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {BindingsSampleComponent} from "./bindings-sample/bindings-sample.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'users'},
  {path: 'users', component: UserListComponent },
  {path: 'bindings', component: BindingsSampleComponent },
  {path: '**', redirectTo: 'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
