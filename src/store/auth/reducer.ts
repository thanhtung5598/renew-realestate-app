import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProfileMe, loginAccount, registerAccount } from "./thunks";
import { IAuthResponse, IProfileResponse } from "./types";
import { clearLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { AUTH_STORAGE } from "@/constants";

interface authState extends Pick<IAuthResponse, "profile"> {
  loading: boolean;
  isAuth: boolean;
}

const initialState: authState = {
  loading: false,
  isAuth: false,
  profile: {
    email: "",
    name: "",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      registerAccount.fulfilled,
      (state, action: PayloadAction<IAuthResponse>) => {
        state.loading = false;
        state.isAuth = true;
        state.profile = action.payload.profile;
        setLocalStorage(AUTH_STORAGE, action.payload.auth);
      }
    );
    builder.addCase(registerAccount.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(loginAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      loginAccount.fulfilled,
      (state, action: PayloadAction<IAuthResponse>) => {
        state.loading = false;
        state.isAuth = true;
        state.profile = action.payload.profile;
        setLocalStorage(AUTH_STORAGE, action.payload.auth);
      }
    );
    builder.addCase(loginAccount.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getProfileMe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getProfileMe.fulfilled,
      (state, action: PayloadAction<IProfileResponse>) => {
        state.loading = false;
        state.isAuth = true;
        state.profile = action.payload.profile;
      }
    );
    builder.addCase(getProfileMe.rejected, (state) => {
      state.loading = false;
      state.isAuth = false;
      clearLocalStorage(AUTH_STORAGE);
    });
  },
});

export default authSlice.reducer;
