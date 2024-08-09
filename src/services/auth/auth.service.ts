import { axiosInstance } from "../../api/instance";
import {
  confirmAccountUrl,
  loginUrl,
  registerUrl,
} from "../../constants/routes";
import {
  IConfirmAccountResponse,
  ILoginData,
  ILoginResponse,
  IRegisterData,
  IRegisterResponse,
} from "./auth.types";
import Cookies from "js-cookie";
export const AuthService = {
  async login(data: ILoginData) {
    const res = await axiosInstance<ILoginResponse>({
      url: loginUrl(),
      method: "POST",
      data,
    });
    return res;
  },

  async register(data: IRegisterData) {
    const res = await axiosInstance<IRegisterResponse>({
      url: registerUrl(),
      method: "POST",
      data,
    });
    return res.data;
  },

  async confirmAccount(code: string) {
    const res = await axiosInstance<IConfirmAccountResponse>({
      url: confirmAccountUrl(code),
      method: "PATCH",
    });
    return res.data;
  },

  async logout() {
    Cookies.remove("email");
    Cookies.remove("auth_token");
    Cookies.remove("refresh_token");
  },
};
