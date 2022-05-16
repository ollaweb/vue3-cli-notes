import { isReferencedIdentifier } from '@vue/compiler-core'
import { createStore } from 'vuex'

export const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: 'evgenii', admin: true },
      { id: 2, name: 'alex', admin: true },
      { id: 3, name: 'garry', admin: false }
    ]
  },
  mutations: {
    setUser(state, user) {
      console.log('call mutation setUser')
      state.user = user
    }
  },
  actions: {
    setUser({ commit }) {
      setTimeout(() => {
        const fakeUser = {
          id: 123,
          name: 'denis',
          admin: false
        }
        commit('setUser', fakeUser)
      }, 1000)
    }
  },
  getters: {
    isUserLogged(state) {
      return state.user ? true : false
    },
    getAllUsers(state) {
      return state.users
    },
    getUsers(state) {
      return state.users.filter(user => !user.admin)
    },
    getUser(state) {
      return state.user
    },
    getUserById: state => id => state.users.find(user => user.id === id),
    getUsersLength(state, getters) {
      const suffix = 'Число пользователей:'
      return `${suffix} ${getters.getAllUsers.length}`
    }
  }
})
