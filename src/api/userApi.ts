import { AuthResponse, LoginPayload, LogoutPayload, RegisterPayload } from './../models/Auth'
import axiosClient from './axiosClient'

export const register = (payload: RegisterPayload): Promise<AuthResponse> => {
  return axiosClient.post('/user/register', payload)
}

export const login = (payload: LoginPayload): Promise<AuthResponse> => {
  return axiosClient.post('/user/login', payload)
}

export const logout = (payload: LogoutPayload): Promise<any> => {
  return axiosClient.post('/user/logout', payload)
}

// export const logout = (payload: LogoutPayload): Promise<any> => {
//   return axiosClient.post('/user/logout', payload)
// }

const userApi = {
  register,
  login,
  logout,
}

export default userApi
