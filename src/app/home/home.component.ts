import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'itd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor( private router: Router ) { }

  nav2Users() {
    this.router.navigate( ['users'] );
  }
}
