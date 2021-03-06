import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  amountOfQuestions: number;
  private minimumNumber: number;
  private maximumNumber: number;
  private operation: string;
  private questionsArray: Question[];
  handler: (() => void) = null;
  startTimer: (() => void) = null;
  endtimer: (() => void) = null;
  reset: (() => void) = null;

  constructor() {
    this.questionsArray = [];
   }

  setData(amount: number, minimum: number, maximum: number, opertaion: string) {
    this.amountOfQuestions = amount;
    this.minimumNumber = minimum;
    this.maximumNumber = maximum;
    this.operation = opertaion;
    this.createQuestionArray();
    
    if (this.handler != null) {
      this.handler();
    }
  }

  resetGame() {
    if (this.reset != null) {
      this.reset();
    }
  }
  finishExam() {
    if (this.endtimer != null) {
      this.endtimer();
    }
  }
  getQuestion(index: number) {
    return this.questionsArray[index];
  }
  createQuestionArray() {
    this.questionsArray = [];
    for (var i = 0; i < this.amountOfQuestions; ++i) {
      this.questionsArray.push(new Question(i, this.getRandomNumber(), this.getRandomNumber(), this.operation));
    }
    if (this.startTimer != null) {
      this.startTimer();
    }
  }
  private getRandomNumber() {
    return Math.floor((Math.random()*this.maximumNumber)+this.minimumNumber);
  }
}
