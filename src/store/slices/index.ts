import authReducer from "@/store/slices/authSlice";
import userReducer from "@/store/slices/userSlice";
import settingReducer from "@/store/slices/settingSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const settingPersistConfig = {
  key: "setting",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["loading"],
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  setting: persistReducer(settingPersistConfig, settingReducer),
});
