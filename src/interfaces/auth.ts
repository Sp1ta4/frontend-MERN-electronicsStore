export interface ILogin {
  email: string;
  password: string;
}
export interface IAuthResponse {
  success: boolean;
  token: string;
  username: string;
}
export interface IRegister {
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
}
