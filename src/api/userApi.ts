import { LoginPayload, LoginResponse, LogoutPayload, RegisterPayload } from './../models/Auth'
import axiosClient from './axiosClient'

export const register = (payload: RegisterPayload): Promise<any> => {
  return axiosClient.post('/user/register', payload)
}

export const login = (payload: LoginPayload): Promise<LoginResponse> => {
  return axiosClient.post('/user/login', payload)
}

export const logout = (payload: LogoutPayload): Promise<any> => {
  return axiosClient.post('/user/logout', payload)
}

const userApi = {
  register,
  login,
  logout,
}

export default userApi
