import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import authSlice from "./authSlice";
import { contactApi } from "../api/contactApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,

    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware),
});
