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

export interface User {
  email: string;
  name: string;
  access: string;
  refresh: string;
}

export interface AuthStateModel {
  user?: User;
  isAuthenticated: boolean;
}
