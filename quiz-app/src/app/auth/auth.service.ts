import { ErrorHandlerService } from './../shared/error-handler/error-handler.service';
import { SignupData, SigninData, User, SigninResponse } from './auth.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  user = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {}

  signup(payload: SignupData) {
    const url = this.baseUrl + '/api/account/register/';
    return this.http
      .post<SignupData>(url, payload)
      .pipe(catchError(this.errorHandlerService.transform));
  }

  signin(payload: SigninData) {
    const url = this.baseUrl + '/api/account/token/';
    return this.http.post<SigninResponse>(url, payload).pipe(
      catchError(this.errorHandlerService.transform),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.name, resData.access);
      })
    );
  }

  private handleAuthentication(email: string, name: string, accessToken: string) {
    const expirationDate = new Date(new Date().getTime() + environment.accessTokenExpiresIn);
    const user = new User(email, name, accessToken, expirationDate);
    this.user.next(user);
  }
}
