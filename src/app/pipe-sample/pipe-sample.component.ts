import { Component } from '@angular/core';

@Component({
  selector: 'itd-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.scss']
})
export class PipeSampleComponent  {

  sampleString = 'Hello World, Lorem , Saban';
  sampleNum = Math.PI;
  sampleDate = new Date();
  sampleObject = {firstname: 'Saban', lastname: 'Ünlü'}
  samplePrice = 100;

  constructor() { }



}
