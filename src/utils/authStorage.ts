import { AuthStore } from '../constants'
import localStoragePlus from './localStoragePlus'

const storage = localStoragePlus.createStorage(AuthStore.Name)
const authStorage = {
  getToken: () => {
    return storage?.getItem(AuthStore.Token)
  },
  getRefreshToken: () => {
    return storage?.getItem(AuthStore.RefreshToken)
  },
  saveToken: (token: string, refreshToken: string) => {
    if (token || refreshToken) {
      if (token) {
        storage?.setItem(AuthStore.Token, token)
      }

      if (refreshToken) {
        storage?.setItem(AuthStore.RefreshToken, refreshToken)
      }
    }
  },
  destroyToken: () => {
    storage?.removeItem(AuthStore.Token)
    storage?.removeItem(AuthStore.RefreshToken)
  },
}

export default authStorage
