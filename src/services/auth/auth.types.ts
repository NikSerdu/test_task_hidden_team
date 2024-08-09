export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  auth_token: string;
  refresh_token: string;
  continue_uri?: string | null;
}

export interface IRegisterData {
  email: string;
  password: string;
  repeat_password: string;
}

export interface IRegisterResponse {
  success: boolean;
  message: string;
}

export interface IConfirmAccountResponse {
  success: boolean;
  message: string;
  result: {
    email: string;
    email_verified: boolean;
  };
}
