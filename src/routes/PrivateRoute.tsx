import { RoutePath } from '../constants/Route'
import { useLocation, Navigate } from 'react-router-dom'
import { ROLE } from '../models'
import useAuth from '../hooks/useAuth'
import AccessDeniedPage from '../pages/AccessDenied/AccessDenied'

interface PrivateRouteProps {
  children: JSX.Element
  roles: Array<ROLE>
}

const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const location = useLocation()
  const { isAuthenticated, user } = useAuth()

  // if (isLoading || isLoadingRegister) {
  //   showNotification(NotificationType.Warning, 'Đang kiểm tra')
  //   return <div>Loading</div>
  // }

  const userHasRequiredRole = user && roles.includes(user.role as ROLE) ? true : false

  if (!isAuthenticated) {
    return <Navigate to={RoutePath.LoginPage} state={{ from: location }} />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDeniedPage />
  }

  return <>{children}</>
}

export default PrivateRoute
