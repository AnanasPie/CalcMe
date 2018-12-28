import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  amountOfQuestions = 30;
  minimumNumber = 1;
  maximumNumber = 100;
  appSettingsInstance: AppSettingsService;
  mul = true;
  div = false;
  add = false;
  min = false;

  constructor(appSettings: AppSettingsService) {
    this.appSettingsInstance = appSettings;
   }

  ngOnInit() {
  }

  submitForm() {
    var op = '*';
    if (this.min) op = '-';
    if (this.add) op = '+';
    if (this.mul) op = '*';

    if (this.amountOfQuestions <= 0) {
      alert('Amount of questions smaller then 0');
      return;
    }
    if (this.minimumNumber < 0) {
      alert ('Minimum number smaller then 0');
      return;
    }
    if (this.minimumNumber >= this.maximumNumber) {
      alert ('Minimum number must be smaller then maximum number');
      return;
    }

    this.appSettingsInstance.setData(this.amountOfQuestions, this.minimumNumber, this.maximumNumber, op);
  }
  changeOpertaion(newOp) {
    this.add = this.mul = this.div = this.min = false;
    if (newOp == '+') {
      this.add = true;
    } else if (newOp == '-') {
      this.min = true;
    } else if (newOp == '*') {
      this.mul = true;
    } else {
      this.div = true;
    }
  }
}
