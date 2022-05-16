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
    ]
  },
  mutations: {
    addNote(state, note) {
      const newNote = {
        title: note.title,
        tags: note.tags
      }
      state.notes.push(newNote)
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    }
  },
  actions: {
    addNote({ commit }, note) {
      commit('addNote', note)
    },
    removeNote({ commit }, index) {
      commit('removeNote', index)
    }
  },
  getters: {
    getAllNotes(state) {
      return state.notes
    }
  }
})
