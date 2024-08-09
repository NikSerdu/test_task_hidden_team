import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/auth.slice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type TypeRootState = ReturnType<typeof rootReducer>;
