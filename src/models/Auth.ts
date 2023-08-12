export interface AuthState {
  user: any
  isLoading: boolean
  email: string
  isLogging: boolean
  isLoadingRegister: boolean
  isLoadingLogout: boolean
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

export interface LoginResponse {
  status: number
  message: string
  data: Data
}

export interface Data {
  accessToken: string
  refreshToken: string
}
