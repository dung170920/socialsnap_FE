import authReducer from "@/store/slices/authSlice";
import userReducer from "@/store/slices/userSlice";
import settingReducer from "@/store/slices/settingSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "setting"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["loading"],
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
  setting: settingReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);
