import axios from 'axios'
import authStorage from '../utils/authStorage'
import queryString from 'query-string'

const axiosOptions = {
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params: any) => queryString.stringify(params),
}

const axiosClient = axios.create(axiosOptions)

axiosClient.interceptors.request.use(
  (request) => {
    if (!request.headers.Authorization) {
      const token = authStorage.getToken()
      console.log(token)
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

export default axiosClient
