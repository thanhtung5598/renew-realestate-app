import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

const prefix = "service_auth";

export interface IRegisterPayload {
  email: string;
  name: string;
  password: string;
  passwordConfirm?: string;
}

export const registerAccount = createAsyncThunk(
  "auth/registerAccount",
  async (payload: IRegisterPayload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `${prefix}/api/v0/accounts/sign_up`,
        payload
      );

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export interface ILoginPayload {
  email: string;
  password: string;
}

export const loginAccount = createAsyncThunk(
  "auth/loginAccount",
  async (payload: ILoginPayload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        `${prefix}/api/v0/accounts/sign_in`,
        payload
      );

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProfileMe = createAsyncThunk(
  "auth/getProfileMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`${prefix}/api/v0/users/me`);

      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
