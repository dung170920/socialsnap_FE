import { AuthResponse, LoginRequest, RegisterRequest } from "@/types";
import { api } from ".";

const authPath = "auth/";

export async function loginApi(loginPayload: LoginRequest) {
  return api.post<AuthResponse>(`${authPath}login`, loginPayload);
}

export async function registerApi(loginPayload: RegisterRequest) {
  return api.post<AuthResponse>(`${authPath}register`, loginPayload);
}
