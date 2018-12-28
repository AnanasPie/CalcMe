import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showSettings = true;

  constructor(private appSettings: AppSettingsService,
    private ref: ChangeDetectorRef) {
    this.appSettings.handler = () => {
      this.showSettings = false;
      this.ref.detectChanges();
    };
    this.appSettings.reset = () => {
      this.showSettings = true;
      this.ref.detectChanges();
    }
   }

  ngOnInit() {
    
  }

}
