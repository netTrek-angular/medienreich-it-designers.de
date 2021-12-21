import { Component } from '@angular/core';

@Component({
  selector: 'itd-directive-samples',
  templateUrl: './directive-samples.component.html',
  styleUrls: ['./directive-samples.component.scss']
})
export class DirectiveSamplesComponent  {
  showImg?: boolean;

  constructor() { }

  toggleShowImg () {
    this.showImg = !this.showImg;
  }

}
