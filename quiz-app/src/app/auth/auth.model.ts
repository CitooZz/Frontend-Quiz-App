export interface SignupData {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  password?: string;
  confirm_password: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface SigninResponse {
  email: string;
  name: string;
  access: string;
  refresh: string;
}

export class User {
  constructor(
    public email: string,
    public name: string,
    private _accessToken: string,
    private accessTokenExpirationDate: Date
  ) {}

  get accessToken() {
    if (!this.accessTokenExpirationDate || new Date() >= this.accessTokenExpirationDate) {
      return null;
    }
    return this._accessToken;
  }
}
