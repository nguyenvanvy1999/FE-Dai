import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authSelector from '../store/selector/authSelector'
import { LoginPayload, NotificationType } from '../models'
import { RoutePath } from '../constants'
import { authAsyncAction } from '../store/slice/authSlice'
import { useAppDispatch } from '../store'
import { unwrapResult } from '@reduxjs/toolkit'
import useAntdNotification from './useAntdNotification'

const useAuth = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const isLoading = useSelector(authSelector.selectIsLoading)

  const isLogging = useSelector(authSelector.selectIsLogging)

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

  return {
    isLoading,
    isLogging,
    handleLogin,
  }
}

export default useAuth
