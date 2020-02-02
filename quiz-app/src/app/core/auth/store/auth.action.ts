import { User } from '../interfaces/auth.interfaces';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public data: User) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
  constructor() {}
}

export class InitAuth {
  static readonly type = '[Auth] Init';
  constructor(public data: User) {}
}

export class NonAuthUser {
  static readonly type = '[Auth] No Authenticated User';
  constructor() {}
}
