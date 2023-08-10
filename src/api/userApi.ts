import { LoginPayload, LoginResponse, RegisterPayload } from './../models/Auth'
import axiosClient from './axiosClient'

export const register = (payload: RegisterPayload): Promise<any> => {
  return axiosClient.post('/user/register', payload)
}

export const login = (payload: LoginPayload): Promise<LoginResponse> => {
  return axiosClient.post('/user/login', payload)
}

const userApi = {
  register,
  login,
}

export default userApi
