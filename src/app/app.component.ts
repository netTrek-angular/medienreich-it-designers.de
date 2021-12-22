import {Component, HostBinding} from '@angular/core';
import {UserService} from "./user/user.service";
import {AppLoadingService} from "./app-loading.service";

@Component({
  selector: 'itd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medienreich-it-designers';

  constructor( /*public user: UserService, */public loading: AppLoadingService ) {
  }
}
