import { AuthResponse, LoginRequest, RegisterRequest } from "@/types";
import { api } from ".";

const path = "auth/";

export async function loginApi(payload: LoginRequest) {
  return api.post<AuthResponse>(`${path}login`, payload);
}

export async function registerApi(payload: RegisterRequest) {
  return api.post<AuthResponse>(`${path}register`, payload);
}
