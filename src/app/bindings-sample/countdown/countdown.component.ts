import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'itd-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  private intervalID?: number;
  private duration = 4000;
  percent = 100;

  constructor() {
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

  private startCountdown() {
    this.intervalID = setInterval(() => {
      this.percent -= 5;
      if (this.percent === 0) {
        this.stopInterval();
      }
    }, this.duration / 30 )
  }

  private stopInterval() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = undefined;
    }
  }

}
