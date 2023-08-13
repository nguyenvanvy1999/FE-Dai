import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authSelector from '../store/selector/authSelector'
import { LoginPayload, LogoutPayload, NotificationType, RegisterPayload } from '../models'
import { RoutePath } from '../constants'
import { authAsyncAction } from '../store/slice/authSlice'
import { useAppDispatch } from '../store'
import { unwrapResult } from '@reduxjs/toolkit'
import useAntdNotification from './useAntdNotification'

const useAuth = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const user = useSelector(authSelector.selectAuthUser)

  const isLoading = useSelector(authSelector.selectIsLoading)

  const isLoadingRegister = useSelector(authSelector.selectIsLoadingRegister)

  const isAuthenticated = useSelector(authSelector.selectIsAuthenticated)

  const { showNotification } = useAntdNotification()

  const handleLogin = async (data: LoginPayload, from = RoutePath.HomePage) => {
    try {
      const actionResult = await dispatch(authAsyncAction.login(data))
      const { message } = await unwrapResult(actionResult)
      showNotification(NotificationType.Success, message)
      navigate(from)
    } catch (error: any) {
      showNotification(NotificationType.Error, error.response?.data?.message || 'Đã xảy ra lỗi.')
    }
  }

  const handleRegister = async (data: RegisterPayload, from = RoutePath.HomePage) => {
    try {
      const actionResult = await dispatch(authAsyncAction.register(data))
      const { message } = await unwrapResult(actionResult)
      showNotification(NotificationType.Success, message)
      navigate(from)
    } catch (error: any) {
      showNotification(NotificationType.Error, error.response?.data?.message || 'Đã xảy ra lỗi.')
    }
  }

  const handleLogout = async (data: LogoutPayload) => {
    try {
      const actionResult = await dispatch(authAsyncAction.logout(data))
      const { message } = await unwrapResult(actionResult)
      showNotification(NotificationType.Success, message)
      navigate(RoutePath.HomePage)
    } catch (error: any) {
      showNotification(NotificationType.Error, error.response?.data?.message || 'Đã xảy ra lỗi.')
    }
  }

  return {
    user,
    isLoading,
    handleLogin,
    handleRegister,
    isLoadingRegister,
    handleLogout,
    isAuthenticated,
  }
}

export default useAuth
