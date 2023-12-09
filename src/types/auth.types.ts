import { ApiResponse, User } from "@/types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type AuthResponse = ApiResponse<{
  accessToken: string;
  refreshToken: string;
  user: User;
}>;
