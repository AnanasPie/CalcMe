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
  finishExam: boolean = false;
  cons: string = "";

  constructor(private appSettings: AppSettingsService,
    private ref: ChangeDetectorRef) {
      console.log('Start exam');
    this.fetchNextQuestion();
   }

  fetchNextQuestion() {
    if (this.questionArray.length < this.appSettings.amountOfQuestions) {
      console.log('fetch next');
      this.questionArray.push(this.appSettings.getQuestion(this.questionArray.length));
    } else {
      this.appSettings.finishExam();
      this.finishExam = true;
      let correctAmount = 0;
      for (let i = 0; i < this.questionArray.length; i++) {
        if (this.questionArray[i].isCorrect) {
          correctAmount++;
        }
      }

      this.cons = String(correctAmount) + "/" + String(this.questionArray.length);
      this.cons += "(" + correctAmount * 100 / this.questionArray.length + ")";
      this.ref.detectChanges();
    }
   }
  ngOnInit() {
  }
  doneClicked(e) {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    console.log(iOS);
    if (!iOS) {
      return
    }
    this.handleClick();
  }
  handleClick() {
    var q = this.questionArray[this.questionArray.length - 1];
    let userResultNumber = parseInt(q.userResult);
    if (isNaN(userResultNumber)) {
      q.isCorrect = false;
    } else {
      q.isCorrect = userResultNumber == q.result;
    }

    q.alreadyAnswered = true;
    this.fetchNextQuestion();
  }
  enterClicked(e) {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS) {
      return;
    }
    this.handleClick();
    
  }

  reset() {
    this.appSettings.createQuestionArray();
    this.questionArray = [];
    this.lastSelectedQuestion = 0;
    this.finishExam = false;
    this.cons = "";
  }
  newGame() {
    this.reset();
    this.fetchNextQuestion();
  }
  goToSettings() {
    this.reset();
    this.appSettings.resetGame();
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
