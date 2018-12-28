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
