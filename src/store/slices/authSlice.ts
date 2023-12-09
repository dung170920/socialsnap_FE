import { LoginRequest, RegisterRequest } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setUser } from "./userSlice";
import { loginApi, registerApi } from "@/apis";
import { handleBadRequestError } from "@/utils";

export interface AuthSlice {
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
}

const initialState: AuthSlice = {
  accessToken: null,
  refreshToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    });
    builder.addMatcher(
      (action) => action.type === "string",
      (state, action) => {
        state.loading = action.type.endsWith("/pending");
      }
    );
  },
});

export const login = createAsyncThunk(
  "auth/login",
  async (loginPayload: LoginRequest, { dispatch, rejectWithValue }) => {
    return loginApi(loginPayload)
      .then((res) => {
        const data = res.data.result!;

        dispatch(setUser(data.user));

        return {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        };
      })
      .catch((error) => {
        if (handleBadRequestError(error)) {
          return rejectWithValue(error.response?.data.errors);
        }
        throw error;
      });
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (registerPayload: RegisterRequest, { dispatch, rejectWithValue }) =>
    registerApi(registerPayload)
      .then((res) => {
        const data = res.data.result!;

        dispatch(setUser(data.user));

        return {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        };
      })
      .catch((error) => {
        if (handleBadRequestError(error)) {
          return rejectWithValue(error.response?.data.errors);
        }
        throw error;
      })
);

export const logout = createAsyncThunk("auth/doLogout", (_, { dispatch }) => {
  dispatch(setUser(null));
});

export default authSlice.reducer;
