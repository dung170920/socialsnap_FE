import { LoginRequest, RegisterRequest, User } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "@/apis";
import { handleBadRequestError } from "@/utils";

export interface AuthSlice {
  data: {
    accessToken: string | null;
    refreshToken: string | null;
    user: User | null;
  };
  loading: boolean;
}

const initialState: AuthSlice = {
  data: {
    accessToken: null,
    refreshToken: null,
    user: null,
  },
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addMatcher(
      (action) => action.type === "string",
      (state, action) => {
        state.loading = action.type.endsWith("/pending");
      }
    );
  },
});

export const login = createAsyncThunk("auth/login", async (loginPayload: LoginRequest, { rejectWithValue }) => {
  return loginApi(loginPayload)
    .then((res) => {
      const data = res.data.result!;
      return data;
    })
    .catch((error) => {
      if (handleBadRequestError(error)) {
        return rejectWithValue(error.response?.data.errors);
      }
      throw error;
    });
});

export const register = createAsyncThunk(
  "auth/register",
  async (registerPayload: RegisterRequest, { rejectWithValue }) =>
    registerApi(registerPayload)
      .then((res) => {
        const data = res.data.result!;
        return data;
      })
      .catch((error) => {
        if (handleBadRequestError(error)) {
          return rejectWithValue(error.response?.data.errors);
        }
        throw error;
      })
);

export const { logout } = authSlice.actions;

export default authSlice.reducer;
