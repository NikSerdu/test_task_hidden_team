import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/auth/auth.service";
import {
  IConfirmAccountResponse,
  ILoginData,
  ILoginResponse,
  IRegisterData,
  IRegisterResponse,
} from "../../../services/auth/auth.types";
import Cookies from "js-cookie";
export const register = createAsyncThunk<IRegisterResponse, IRegisterData>(
  "register",
  async (data, thunkApi) => {
    try {
      const response = await AuthService.register(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk<ILoginResponse, ILoginData>(
  "login",
  async (data, thunkApi) => {
    try {
      const response = await AuthService.login(data);
      Cookies.set("refresh_token", response.data.refresh_token);
      Cookies.set("auth_token", response.data.auth_token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const confirmAccount = createAsyncThunk<
  IConfirmAccountResponse,
  { code: string }
>("confirm account", async ({ code }, thunkApi) => {
  try {
    const response = await AuthService.confirmAccount(code);
    Cookies.set("email", String(response.result.email));
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await AuthService.logout();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
