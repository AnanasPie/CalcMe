import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  amountOfQuestions = 10;
  minimumNumber = 1;
  maximumNumber = 7;
  appSettingsInstance: AppSettingsService;

  constructor(appSettings: AppSettingsService) {
    this.appSettingsInstance = appSettings;
   }

  ngOnInit() {
  }

  submitForm() {
    this.appSettingsInstance.setData(this.amountOfQuestions, this.minimumNumber, this.maximumNumber);
    
  }

}
