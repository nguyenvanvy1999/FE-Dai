import axios from 'axios'
import authStorage from '../utils/authStorage'

const axiosOptions = {
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

const axiosClient = axios.create(axiosOptions)

axiosClient.interceptors.request.use(
  (request) => {
    if (!request.headers.Authorization) {
      const token = authStorage.getToken()
      if (token) {
        request.headers.Authorization = `Bearer ${token}`
      }
    }
    return request
  },
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response?.data || error)
)
