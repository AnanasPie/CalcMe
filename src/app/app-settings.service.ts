import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  amountOfQuestions: number;
  private minimumNumber: number;
  private maximumNumber: number;
  private questionsArray: Question[];
  handler: (() => void) = null;

  constructor() {
    this.questionsArray = [];
   }

  setData(amount: number, minimum: number, maximum: number) {
    this.amountOfQuestions = amount;
    this.minimumNumber = minimum;
    this.maximumNumber = maximum;
    this.createQuestionArray();
    
    if (this.handler != null) {
      this.handler();
    }
  }
  getQuestion(index: number) {
    return this.questionsArray[index];
  }
  private createQuestionArray() {
    for (var i = 0; i < this.amountOfQuestions; ++i) {
      this.questionsArray.push(new Question(i, this.getRandomNumber(), this.getRandomNumber()));
    }
  }
  private getRandomNumber() {
    return Math.floor((Math.random()*this.maximumNumber)+this.minimumNumber);
  }
}
