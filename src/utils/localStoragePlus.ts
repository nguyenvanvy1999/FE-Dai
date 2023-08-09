import ms from 'ms'

const localStoragePlus = (() => ({
  createStorage: (key: any) => {
    if (key) {
      const storedData = localStorage?.getItem(key)
      const storage = storedData ? JSON.parse(storedData) : {}
      const save = () => localStorage.setItem(key, JSON.stringify(storage))

      return {
        length: Object.keys(storage).length || 0,

        setItem: (key: any, value: any, ttl = 0) => {
          const exp = Date.now() + ms(ttl.toString())
          const item = { value, exp }

          storage[key] = item
          save()
        },

        getItem: (key: any, options = { ignoreExp: true }) => {
          const item = storage[key]

          if (item) {
            if (options.ignoreExp || Date.now() <= item.exp) {
              return item.value
            }
          }
          return null
        },

        removeItem: (key: any) => {
          delete storage[key]
          save()
        },
      }
    }
  },
}))()

export default localStoragePlus
