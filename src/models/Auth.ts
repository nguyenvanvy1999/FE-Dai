export interface AuthState {
  user: any
  isLoading: boolean
  email: string
  isLogging: boolean
}

export interface RegisterPayload {
  fullName: string
  phoneNumber: string
  role: number
  userName: string
  password: string
  email: string
}

export interface LoginPayload {
  password: string
  email: string
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
