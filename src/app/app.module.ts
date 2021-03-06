import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ExamComponent } from './exam/exam.component';
import { MyTimerComponent } from './my-timer/my-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MainComponent,
    ExamComponent,
    MyTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
