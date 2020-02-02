import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { AuthState } from '../store/auth.state';
import { Observable } from 'rxjs';
import { AuthStateModel, User } from '../interfaces/auth.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Login, Logout } from '../store/auth.action';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  @Select(AuthState.user)
  user$: Observable<AuthStateModel['user']>;

  @Select(AuthState.isAuthenticated)
  isAuthenticated: Observable<boolean>;

  constructor(private http: HttpClient, private store: Store) {}

  login(email: string, password: string) {
    return this.http
      .post<User>(`${environment.baseUrl}/api/account/token/`, {
        email,
        password
      })
      .pipe(
        tap(resp => {
          this.doLogin(resp);
        })
      );
  }

  @Dispatch()
  doLogin(userData: User) {
    return new Login(userData);
  }

  @Dispatch()
  doLogout() {
    return new Logout();
  }
}
