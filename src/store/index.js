import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        title: 'Finish Course',
        tags: ['work', 'home']
      },
      {
        title: 'Visit Museum',
        tags: ['travel']
      }
    ],
    tags: ['home', 'work', 'travel']
  },
  mutations: {
    addNote(state, { title, activeTags }) {
      const newNote = {
        title: title,
        tags: activeTags
      }
      state.notes.push(newNote)
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    }
  },
  actions: {
    addNote({ commit }, { title, activeTags }) {
      commit('addNote', { title, activeTags })
    },
    removeNote({ commit }, index) {
      commit('removeNote', index)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getTags(state) {
      return state.tags
    }
  }
})
