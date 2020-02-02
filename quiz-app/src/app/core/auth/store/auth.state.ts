import { AuthStateModel } from './../interfaces/auth.interfaces';

import { State, Selector, Action, StateContext } from '@ngxs/store';
import { environment } from '../../../../environments/environment';
import { Login, Logout, InitAuth } from './auth.action';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isAuthenticated: false
  }
})
export class AuthState {
  @Selector()
  static user(state: AuthStateModel) {
    return state.user;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return state.isAuthenticated;
  }

  @Action(Login)
  doLogin(ctx: StateContext<AuthStateModel>, { data }: Login) {
    localStorage.setItem(environment.key, JSON.stringify(data));
    ctx.setState({ user: data, isAuthenticated: true });
  }

  @Action(Logout)
  doLogout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    localStorage.removeItem(environment.key);
    ctx.setState({ isAuthenticated: false });
  }

  @Action(InitAuth)
  authInit(ctx: StateContext<AuthStateModel>, { data }: InitAuth) {
    ctx.setState({ user: data, isAuthenticated: true });
  }
}
