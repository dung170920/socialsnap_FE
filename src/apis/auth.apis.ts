import { AuthResponse, LoginRequest, RegisterRequest } from "@/types";
import { api } from ".";

const authpath = "auth/";

export async function loginApi(loginPayload: LoginRequest) {
  return api.post<AuthResponse>(`${authpath}login`, loginPayload);
}

export async function registerApi(loginPayload: RegisterRequest) {
  return api.post<AuthResponse>(`${authpath}register`, loginPayload);
}
