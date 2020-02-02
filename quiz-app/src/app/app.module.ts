import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { QuizComponent } from './quiz/quiz.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MyQuizComponent } from './quiz/my-quiz/my-quiz.component';
import { PublicQuizComponent } from './quiz/public-quiz/public-quiz.component';
import { CreateQuizComponent } from './quiz/create-quiz/create-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    QuizComponent,
    SigninComponent,
    SignupComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    MyQuizComponent,
    PublicQuizComponent,
    CreateQuizComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
