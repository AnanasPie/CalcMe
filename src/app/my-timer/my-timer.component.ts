import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {timer} from 'rxjs';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-my-timer',
  templateUrl: './my-timer.component.html',
  styleUrls: ['./my-timer.component.css']
})
export class MyTimerComponent implements OnInit {

  myTimer = null;
  minutes = 0;
  seconds = 0;
  finish = false;

  constructor(private ser: AppSettingsService, private ref: ChangeDetectorRef) { 
    ser.startTimer = (() => {
      this.minutes = this.seconds = 0;
      this.finish = false;
      if (this.myTimer != null)
        return;
      this.myTimer = timer(0, 1000);
      this.myTimer.subscribe(t => {
        if (this.finish) {
          return;
        }
        if (this.seconds == 59) {
          this.minutes = this.minutes + 1;
          this.seconds = 0;
        } else {
          this.seconds = this.seconds + 1;
        }
        this.ref.detectChanges();
      });
    });
    ser.endtimer = (() => {
      this.finish = true;
    });
  }

  ngOnInit() {
  }
}
