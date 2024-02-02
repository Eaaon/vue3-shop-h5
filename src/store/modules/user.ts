import { defineStore } from 'pinia'
// import SecureLS from 'secure-ls'

// let ls = new SecureLS({ encodingType: 'aes' })

interface UserState {
  token: string;
}

export const useAppStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: ''
    // token: ls.get('token')
  }),
  getters: {
    getToken: (state): string => state.token,
  },
  actions: {
    login(val: string) {
      // ls.set('token', val)
      this.token = val
    }
  },
  persist: {
    storage: sessionStorage,
  },
})