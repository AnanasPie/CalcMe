import { Component, OnInit, ChangeDetectorRef, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { Question } from '../question';
import { AppSettingsService } from '../app-settings.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  @ViewChildren("txtArea") txtAreas:QueryList<ElementRef>;
  
  questionArray: Question[] = [];
  lastSelectedQuestion: number = 0;

  constructor(private appSettings: AppSettingsService,
    private ref: ChangeDetectorRef) {
      console.log('Start exam');
    this.fetchNextQuestion();
   }

  fetchNextQuestion() {
    console.log('Going to fetc');
    if (this.questionArray.length < this.appSettings.amountOfQuestions) {
      this.questionArray.push(this.appSettings.getQuestion(this.questionArray.length));
    }
   }
  ngOnInit() {
  }
  enterClicked(e) {
    var q = this.questionArray[this.questionArray.length - 1];
    let userResultNumber = parseInt(q.userResult);
    if (isNaN(userResultNumber)) {
      q.isCorrect = false;
    } else {
      q.isCorrect = userResultNumber == q.result;
    }

    q.alreadyAnswered = true;
    this.fetchNextQuestion();
    // this.doSomething(true);
  }

  doSomething() {
    if (this.lastSelectedQuestion > this.questionArray.length) {
      return;
    }
    if (this.txtAreas == undefined) {
      return;
    }
    
    let c = this.txtAreas.last;
    if (c != undefined) {
      this.lastSelectedQuestion = this.questionArray.length - 1;
      c.nativeElement.focus();
    }

  }
  
  

}
