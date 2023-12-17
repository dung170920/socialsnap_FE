import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SettingSlice {
  theme: "light" | "dark";
}

const initialState: SettingSlice = {
  theme: "light",
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingSlice.actions;

export default settingSlice.reducer;
