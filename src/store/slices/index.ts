import authReducer from "@/store/slices/authSlice";
import userReducer from "@/store/slices/userSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["loading"],
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducers);
