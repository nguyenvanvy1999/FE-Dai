import { message } from 'antd'
import { NotificationType } from '../models'

const useAntdNotification = () => {
  const showNotification = (type: NotificationType, content: any) => {
    message[type](content)
  }

  return { showNotification }
}

export default useAntdNotification
