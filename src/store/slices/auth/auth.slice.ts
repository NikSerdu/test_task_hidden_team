import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { confirmAccount, login, logout, register } from "./auth.actions";

const initialState = {
  email: Cookies.get("email") || null,
  auth_token: Cookies.get("auth_token") || null,
  refresh_token: Cookies.get("refresh_token") || null,
  isLoading: false,
  isVerified: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.isLoading = false;
        state.auth_token = payload.auth_token;
        state.refresh_token = payload.refresh_token;
        state.isVerified = true;
      })
      .addCase(confirmAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmAccount.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isVerified = true;
        state.email = payload.result.email;
      })
      .addCase(logout.fulfilled, (state) => {
        state.email = null;
        state.auth_token = null;
        state.refresh_token = null;
        state.isVerified = false;
      });
  },
});
