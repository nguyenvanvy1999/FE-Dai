export interface AuthState {
  user?: User
  isLoading: boolean
  email: string
  isLoadingRegister: boolean
  isLoadingLogout: boolean
  isAuthenticated: boolean
}

export interface RegisterPayload {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

export interface LoginPayload {
  password: string
  email: string
}

export interface LogoutPayload {
  refreshToken: string
}

export interface AuthResponse {
  status: number
  message: string
  data: AuthResponseData
}

export interface AuthResponseData {
  user: User
  accessToken: string
  refreshToken: string
}

export interface User {
  id: string
  email: string
  role: number | ROLE
  userName: string
  phoneNumber: string
  fullName: string
}

export enum ROLE {
  ADMIN = 'Admin',
  USER = 'User',
}
