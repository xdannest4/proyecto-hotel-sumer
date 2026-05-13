export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  role: "ADMIN" | "USER";
}

export type User = {
  email: string;
  role: "ADMIN" | "USER";
};

export interface TokenPayload {
  sub: string; // email
  role: string;
  exp: number;
}